import React from 'react';
import PropTypes from 'prop-types';
import ProductListInfoComponent from './ProductListInfoComponent';
import ProductListImageComponent from './ProductListImageComponent';

const ProductListComponent = ({ productName, price, images }) => (
  <div>
    <ProductListImageComponent productName={productName} price={price} />
    <ProductListInfoComponent images={images} />
  </div>
);

ProductListComponent.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  images: PropTypes.string.isRequired,
};

export default ProductListComponent;
