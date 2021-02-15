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
    <div className={styles.productListItem} onClick={itemClickThrough} onKeyUp={itemClickThrough} role="button" tabIndex="-1">
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
