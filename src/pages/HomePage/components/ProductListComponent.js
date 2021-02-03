import React from 'react';
import PropTypes from 'prop-types';
import ProductListImageComponent from './ProductListImageComponent';
import ProductListInfoComponent from './ProductListInfoComponent';

const ProductListComponent = ({ productName, price, images }) => (
  <div>
    <ProductListImageComponent images={images} />
    <ProductListInfoComponent
      productName={productName}
      price={price}
    />
  </div>
);

ProductListComponent.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  images: PropTypes.string.isRequired,
};

export default ProductListComponent;
