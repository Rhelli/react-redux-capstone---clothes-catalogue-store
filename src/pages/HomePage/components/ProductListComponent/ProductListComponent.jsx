/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import ProductListImageComponent from '../ProductListImageComponent/ProductListImageComponent';
import ProductListInfoComponent from '../ProductListInfoComponent/ProductListInfoComponent';
import styles from './ProductListComponent.module.scss';

const ProductListComponent = props => {
  const {
    productName, price, images, itemClickThrough,
  } = props;

  return (
    <div className={styles.productListItem} onClick={itemClickThrough}>
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
