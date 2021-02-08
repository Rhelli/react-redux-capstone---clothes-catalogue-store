import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ProductPageContainer = ({ productData }) => {
  const {
    id, type,
  } = productData;

  // eslint-disable-next-line no-console
  console.log(productData);

  return (
    <div styles="height: 100px; width: 100px; background-color: red;">
      <div>
        <h2>This is the ProductPageContainer</h2>
        <p>{id}</p>
        <p>{type}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  productData: state.productStore.singleProduct,
});

ProductPageContainer.propTypes = {
  productData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, null)(ProductPageContainer);
