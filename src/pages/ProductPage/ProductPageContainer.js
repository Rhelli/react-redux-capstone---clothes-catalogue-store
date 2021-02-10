import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductImageComponent from './components/ProductImageComponent/ProductImageComponent';
import ProductInfoComponent from './components/ProductInfoComponent/ProductInfoComponent';
import ProductPageNavbarComponent from '../../common/components/ProductPageNavbarComponent/ProductPageNavbarComponent';
import styles from './ProductPageContainer.module.scss';

const ProductPageContainer = ({ singleProduct }) => {
  const {
    id, gender, type, images, brandName, productName, price,
    color, colorTool, productDetails, productDesc, madeOf,
  } = singleProduct;

  return (
    <div className={styles.productPageContainer}>
      <ProductPageNavbarComponent />
      <div>
        <ProductImageComponent
          images={images}
          brandName={brandName}
          type={type}
        />
      </div>
      <div>
        <ProductInfoComponent
          id={id}
          gender={gender}
          type={type}
          brandName={brandName}
          productName={productName}
          price={price}
          color={color}
          colorTool={colorTool}
          productDetails={productDetails}
          productDesc={productDesc}
          madeOf={madeOf}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  singleProduct: state.productStore.singleProduct,
  productData: state.productStore.products,
});

ProductPageContainer.propTypes = {
  singleProduct: PropTypes.shape({
    gender: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    brandName: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    colorTool: PropTypes.string.isRequired,
    productDetails: PropTypes.arrayOf(PropTypes.string).isRequired,
    productDesc: PropTypes.string.isRequired,
    madeOf: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, null)(ProductPageContainer);
