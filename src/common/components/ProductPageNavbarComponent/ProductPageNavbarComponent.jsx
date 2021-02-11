import React from 'react';
import styles from './ProductPageNavbarComponent.module.scss';

const ProductPageNavbarComponent = () => (
  <div className={styles.navbarContainer}>
    <div className={styles.navbarLink}>
      <a href="/">ᐊ Back</a>
    </div>
    <div className={styles.navbarTitle}>
      <h1>Clothes Inc.</h1>
    </div>
  </div>
);

export default ProductPageNavbarComponent;
