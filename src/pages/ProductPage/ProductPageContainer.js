import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../state/product/productActions';
import Navbar from '../../common/components/NavbarComponent';

const ProductPageContainer = ({productData, fetchProducts}) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  return productData.loading ? (
    <h2>Loading Text...</h2>
  ) : productData.error ? (
    <h2>{productData.error}</h2>
  ) : (
    <div>
      <h2>Product List</h2>
      <div>
        {
          productData.mens.jackets.map(jacket => <p>{jacket.productName}</p>)
        }
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  productData: state.productStore,
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPageContainer);
