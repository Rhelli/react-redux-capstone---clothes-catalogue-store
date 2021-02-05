/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchProducts from '../../api/clothesAPI';
import ProductListComponent from './components/ProductListComponent';
import { fetchProductID } from '../../state/product/productActions';
import CategoryFilterComponent from './components/CategoryComponentv2';
import { filterCategory } from '../../state/categoryFilter/categoryActions';

const HomePageContainer = ({ categoryData, productData, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const {
    clothesFilter, genderFilter, colorFilter,
  } = categoryData;
  const history = useHistory();

  const itemClickThrough = product => {
    fetchProductID(product);
    history.push(`/products/${product.gender}/${product.type}/${product.id}`);
  };

  const enableSelectedFilter = (event, filter) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(event.target.dataset.name, filter);
    const { name } = event.target.dataset;
    filterCategory(name, filter);
  };

  const activeFilters = () => {
    const activeFilters = {
      gender: [],
      clothes: [],
      color: [],
    };

    for (const genderKey in genderFilter) {
      if (genderFilter[genderKey]) activeFilters.gender.push(genderKey);
    }
    for (const clothesKey in clothesFilter) {
      if (clothesFilter[clothesKey]) activeFilters.clothes.push(clothesKey);
    }
    for (const colorKey in colorFilter) {
      if (colorFilter[colorKey]) activeFilters.color.push(colorKey);
    }
    return activeFilters;
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
    <div>
      <CategoryFilterComponent
        enableSelectedFilter={enableSelectedFilter}
        categoryData={categoryData}
      />
      <h2>Product List</h2>
      <div>
        {
          multiPropsFilter(productData.products, activeFilters).map(item => (
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

const mapDispatchToProps = dispatch => {
  // eslint-disable-next-line no-console
  console.log('This is dispatch');
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    filterCategory: (name, filter) => {
      dispatch(filterCategory(name, filter));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
