/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import ProductListImageComponent from './ProductListImageComponent';
import ProductListInfoComponent from './ProductListInfoComponent';

const ProductListComponent = props => {
  const {
    productName, price, images, itemClickThrough,
  } = props;

  return (
    <div onClick={itemClickThrough}>
      <ProductListImageComponent images={images} />
      <ProductListInfoComponent
        productName={productName}
        price={price}
      />
    </div>
  );
};

ProductListComponent.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  itemClickThrough: PropTypes.func.isRequired,
};

export default ProductListComponent;
