/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
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
      <div>
        <div>
          <div>
            Like
          </div>
          <div>
            <button type="button">{`${price} →`}</button>
          </div>
        </div>
      </div>
      <div>
        <p>{productDesc}</p>
      </div>
      <div>
        <div>
          <ul>
            {
              productDetails.map((detail, index) => (
                <li key={`${id}-${index}`}>{detail}</li>
              ))
            }
          </ul>
        </div>
      </div>
      <div>
        <div>
          <h4>{madeOf}</h4>
        </div>
        <div>
          <h4>{`ID: ${id}`}</h4>
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
