import React from 'react';
import PropTypes from 'prop-types';

const ProductListInfoComponent = ({ productName, price }) => (
  <div>
    <div>
      <h3>{productName}</h3>
    </div>
    <div>
      <h5>{price}</h5>
    </div>
  </div>
);

ProductListInfoComponent.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductListInfoComponent;
