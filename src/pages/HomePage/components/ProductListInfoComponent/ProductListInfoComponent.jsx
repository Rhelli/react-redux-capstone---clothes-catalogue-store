import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductListInfoComponent.module.scss';

const ProductListInfoComponent = ({ productName, price }) => (
  <div className={styles.productListInfoContainer}>
    <div className={styles.productListInfoNameContainer}>
      <h3>{productName}</h3>
    </div>
    <div className={styles.productListInfoPriceContainer}>
      <h5>
        £
        {price}
      </h5>
    </div>
  </div>
);

ProductListInfoComponent.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductListInfoComponent;
