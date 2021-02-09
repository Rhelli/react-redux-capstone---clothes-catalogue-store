import React from 'react';
import PropTypes from 'prop-types';

const ProductListImageComponent = ({ images }) => (
  <div>
    <div>
      <img alt="" src={images} />
    </div>
  </div>
);

ProductListImageComponent.propTypes = {
  images: PropTypes.string.isRequired,
};

export default ProductListImageComponent;
