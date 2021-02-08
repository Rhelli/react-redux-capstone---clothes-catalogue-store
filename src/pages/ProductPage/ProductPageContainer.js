import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductImageComponent from './components/ProductImageComponent';

const ProductPageContainer = ({ singleProduct }) => {
  const {
    type, images, brandName,
  } = singleProduct;

  console.log(images);

  // eslint-disable-next-line no-console
  console.log(singleProduct);

  return (
    <div styles="height: 100px; width: 100px; background-color: red;">
      <ProductImageComponent
        images={images}
        brandName={brandName}
        type={type}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  singleProduct: state.productStore.singleProduct,
  productData: state.productStore.products,
});

ProductPageContainer.propTypes = {
  singleProduct: PropTypes.shape({
    type: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    brandName: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, null)(ProductPageContainer);
