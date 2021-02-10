/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchProducts from '../../api/clothesAPI';
import ProductListComponent from './components/ProductListComponent/ProductListComponent';
import { fetchProductID } from '../../state/product/productActions';
import CategoryFilterInputComponent from './components/CategoryFilterInputComponent/CategoryFilterInputComponent';
import filterCategory from '../../state/categoryFilter/categoryActions';
import HomePageNavbarComponent from '../../common/components/HomePageNavbarComponent/HomePageNavbarComponent';
import styles from './HomePageContainer.module.scss';

const HomePageContainer = ({
  filterCategory, categoryData, productData, fetchProducts, fetchProductID,
}) => {
  useEffect(() => {
    fetchProducts(productData);
  }, []);

  const {
    clothesFilter, genderFilter, colorFilter,
  } = categoryData;

  const history = useHistory();

  const itemClickThrough = product => {
    fetchProductID(product);
    history.push(`/${product.gender}/${product.type}/${product.id}`);
  };

  const activeFilters = () => {
    const activeFilters = {
      gender: [],
      type: [],
      colorTool: [],
    };

    for (const genderKey in genderFilter) {
      if (genderFilter[genderKey]) activeFilters.gender.push(genderKey);
    }
    for (const clothesKey in clothesFilter) {
      if (clothesFilter[clothesKey]) activeFilters.type.push(clothesKey);
    }
    for (const colorKey in colorFilter) {
      if (colorFilter[colorKey]) activeFilters.colorTool.push(colorKey);
    }
    return activeFilters;
  };

  const enableSelectedFilter = (event, filter) => {
    filterCategory(event.target.dataset.name, filter);
  };

  const multiPropsFilter = (products, filters) => {
    const filterKeys = Object.keys(filters);
    return products.filter(product => filterKeys.every(key => {
      if (!filters[key].length) return true;
      if (Array.isArray(product[key])) {
        return product[key].some(keyElement => filters[key].includes(keyElement));
      }
      return filters[key].includes(product[key]);
    }));
  };

  // eslint-disable-next-line no-nested-ternary
  return productData.loading ? (
    <h2>Loading Text...</h2>
  ) : productData.error ? (
    <h2>{productData.error}</h2>
  ) : (
    <div className={styles.homePageContainer}>
      <HomePageNavbarComponent />
      <div className={styles.titleCategoryContainer}>
        <h2 className={styles.productListTitle}>Our Collection</h2>
        <CategoryFilterInputComponent
          enableSelectedFilter={enableSelectedFilter}
          categoryData={categoryData}
        />
      </div>
      <div className={styles.productListContainer}>
        {
          multiPropsFilter(productData.products, activeFilters()).map(item => (
            <ProductListComponent
              key={item.id}
              itemClickThrough={() => itemClickThrough(item)}
              productName={item.productName}
              price={item.price}
              images={item.images[0]}
            />
          ))
        }
      </div>
    </div>
  );
};

HomePageContainer.propTypes = {
  productData: PropTypes.shape({
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        productName: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        productDetails: PropTypes.arrayOf(PropTypes.string).isRequired,
        productDesc: PropTypes.string.isRequired,
        brandName: PropTypes.string.isRequired,
        madeOf: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
  fetchProducts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  productData: state.productStore,
  categoryData: state.categoryStore,
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  filterCategory: (event, filter) => dispatch(filterCategory(event, filter)),
  fetchProductID: item => dispatch(fetchProductID(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
