import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductListImageComponent.module.scss';

const ProductListImageComponent = ({ images }) => (
  <div className={styles.productListImage}>
    <img alt="" src={images} />
  </div>
);

ProductListImageComponent.propTypes = {
  images: PropTypes.string.isRequired,
};

export default ProductListImageComponent;
