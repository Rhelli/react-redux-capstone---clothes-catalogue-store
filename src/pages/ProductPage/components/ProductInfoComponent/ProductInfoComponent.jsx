import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { genderParse, caseParse } from '../../../../utils';
import getColorPreview from '../../../../utils/colorUtil';
import styles from './ProductInfoComponent.module.scss';

const ProductInfoComponent = props => {
  const {
    id, gender, type, brandName, productName, price,
    color, colorTool, productDetails, productDesc, madeOf,
  } = props;

  return (
    <div className={styles.productInfoContainer}>
      <div className={styles.productInfoSiteMap}>
        <span><p>{genderParse(gender)}</p></span>
        <span><p>&nbsp;›&nbsp;</p></span>
        <span><p>{caseParse(type)}</p></span>
      </div>
      <div className={styles.productInfoTitleBrand}>
        <h2>{productName}</h2>
        <h3>{brandName}</h3>
      </div>
      <div className={styles.productInfoColorSize}>
        <div className={styles.productInfoColorPreview}>
          <p>{color}</p>
          <div className={styles.colorPreviewContainer}>
            <div style={getColorPreview(colorTool)} />
          </div>
        </div>
        <div className={styles.productInfoSizeSelect}>
          <span className={styles.sizeButtonContainer}>
            <label htmlFor="small">
              <input type="radio" id="small" name="size" value="small" />
              <span>S</span>
            </label>
          </span>
          <span className={styles.sizeButtonContainer}>
            <label htmlFor="medium">
              <input type="radio" id="medium" name="size" value="medium" />
              <span className={styles.sizeLabelM}>M</span>
            </label>
          </span>
          <span className={styles.sizeButtonContainer}>
            <label htmlFor="large">
              <input type="radio" id="large" name="size" value="large" />
              <span>L</span>
            </label>
          </span>
        </div>
      </div>
      <div className={styles.productInfoLikeBuy}>
        <button type="button" className={styles.infoLikeButton}>
          <FontAwesomeIcon icon={faHeart} className={styles.likeButtonIcon} />
        </button>
        <div className={styles.productInfoBuyButton}>
          <button type="button">
            {`£${price}`}
            <FontAwesomeIcon className={styles.buyNowIcon} icon={faShoppingBag} />
          </button>
        </div>
      </div>
      <div className={styles.productDescription}>
        <p>{productDesc}</p>
      </div>
      <div className={styles.productDetailsList}>
        <ul>
          {
            productDetails.map((detail, index) => (
              <li key={`${id}-${index + 1}`}>{detail}</li>
            ))
          }
        </ul>
      </div>
      <div className={styles.productExtraInfo}>
        <div className={styles.madeOf}>
          <p>{madeOf}</p>
        </div>
        <div className={styles.productID}>
          <p>{`ID: ${id}`}</p>
        </div>
      </div>
    </div>
  );
};

ProductInfoComponent.propTypes = {
  gender: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  brandName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  colorTool: PropTypes.string.isRequired,
  productDetails: PropTypes.arrayOf(PropTypes.string).isRequired,
  productDesc: PropTypes.string.isRequired,
  madeOf: PropTypes.string.isRequired,
};

export default ProductInfoComponent;
