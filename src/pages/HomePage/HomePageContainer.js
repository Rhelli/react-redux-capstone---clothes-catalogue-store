/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchProducts from '../../api/clothesAPI';
import ProductListComponent from './components/ProductListComponent';
import { fetchProductID } from '../../state/product/productActions';
import CategoryComponent from './components/CategoryComponent';
import filterCategory from '../../state/categoryFilter/categoryActions';

const HomePageContainer = ({ filterCategory, productData, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const history = useHistory();

  const itemClickThrough = product => {
    fetchProductID(product);
    history.push(`/products/${product.gender}/${product.type}/${product.id}`);
  };

  const enableFilter = event => {
    filterCategory(event.target.value);
  };

  const productPreFilter = (arr, filter) => {
    if (filter === 'All') {
      return arr;
    }
    return arr.filter(item)
  }

  let response;
  if (productData.loading) {
    response = <h2>Loading Store...</h2>;
  } else if (productData.error) {
    response = <h2>{productData.error}</h2>;
  } else {
    response = (
      <div>
        <CategoryComponent enableFilter={enableFilter} />
        <h2>Product List</h2>
        <div>
          {
            productData.products.map(item => (
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
  }

  // eslint-disable-next-line no-nested-ternary
  return response;
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
  filterCategory: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  productData: state.productStore,
  productFiler: state.categoryStore,
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  filterCategory: category => {
    dispatch(filterCategory(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
