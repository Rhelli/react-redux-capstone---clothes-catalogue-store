/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchProducts } from '../../state/product/productActions';

const ProductPageContainer = ({ productData, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  // eslint-disable-next-line no-nested-ternary
  return productData.loading ? (
    <h2>Loading Text...</h2>
  ) : productData.error ? (
    <h2>{productData.error}</h2>
  ) : (
    <div>
      <h2>Product List</h2>
      <div>
        {
          productData.products[0][0][0].map(jacket => <p>{jacket.productName}</p>)
        }
      </div>
    </div>
  );
};

ProductPageContainer.propTypes = {
  productData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    productDetails: PropTypes.arrayOf(PropTypes.string).isRequired,
    productDesc: PropTypes.string.isRequired,
    brandName: PropTypes.string.isRequired,
    madeOf: PropTypes.string.isRequired,
  }).isRequired,
  fetchProducts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  productData: state.productStore,
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPageContainer);
