/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import getColorPreview from '../../../../utils/colorUtil';
import styles from './CategoryTagsComponent.module.scss';

const CategoryTagsComponent = props => {
  const {
    categoryData, enableSelectedFilter,
  } = props;

  return (
    <div className={styles.categoryTagsContainer}>
      { categoryData.genderFilter.male ? (
        <div
          data-name="male"
          className={styles.male}
          onClick={event => enableSelectedFilter(event, 'genderFilter')}
        >
          <h6 data-name="male">Mens&nbsp;&nbsp;&nbsp;×</h6>
        </div>
      ) : null}
      { categoryData.genderFilter.female ? (
        <div
          data-name="female"
          className={styles.female}
          onClick={event => enableSelectedFilter(event, 'genderFilter')}
        >
          <h6 data-name="female">Womens&nbsp;&nbsp;&nbsp;×</h6>
        </div>
      ) : null}
      { categoryData.clothesFilter.jacket ? (
        <div
          data-name="jacket"
          className={styles.jacket}
          onClick={event => enableSelectedFilter(event, 'clothesFilter')}
        >
          <h6 data-name="jacket">Coats & Jackets&nbsp;&nbsp;&nbsp;×</h6>
        </div>
      ) : null}
      { categoryData.clothesFilter.jeans ? (
        <div
          data-name="jeans"
          className={styles.jeans}
          onClick={event => enableSelectedFilter(event, 'clothesFilter')}
        >
          <h6 data-name="jeans">Jeans&nbsp;&nbsp;&nbsp;×</h6>
        </div>
      ) : null}
      { categoryData.clothesFilter.shirts ? (
        <div
          data-name="shirts"
          className={styles.shirts}
          onClick={event => enableSelectedFilter(event, 'clothesFilter')}
        >
          <h6 data-name="shirts">Shirts&nbsp;&nbsp;&nbsp;×</h6>
        </div>
      ) : null}
      { categoryData.clothesFilter.tops ? (
        <div
          data-name="tops"
          className={styles.tops}
          onClick={event => enableSelectedFilter(event, 'clothesFilter')}
        >
          <h6 data-name="tops">Tops&nbsp;&nbsp;&nbsp;×</h6>
        </div>
      ) : null}
      { categoryData.clothesFilter.dresses ? (
        <div
          data-name="dresses"
          className={styles.dresses}
          onClick={event => enableSelectedFilter(event, 'clothesFilter')}
        >
          <h6 data-name="dresses">Dresses&nbsp;&nbsp;&nbsp;×</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.black ? (
        <div
          data-name="black"
          style={getColorPreview('black')}
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="black">Black&nbsp;&nbsp;&nbsp;×</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.darkestSpruce ? (
        <div
          data-name="darkestSpruce"
          style={getColorPreview('darkestSpruce')}
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="darkestSpruce">Darkest Spruce&nbsp;&nbsp;&nbsp;×</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.multi ? (
        <div
          data-name="multi"
          className={styles.multi}
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="multi">Multi&nbsp;&nbsp;&nbsp;×</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.blue ? (
        <div
          data-name="blue"
          style={getColorPreview('blue')}
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="blue">Blue&nbsp;&nbsp;&nbsp;×</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.blueDenim ? (
        <div
          data-name="blueDenim"
          style={getColorPreview('blueDenim')}
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="blueDenim">Blue Denim&nbsp;&nbsp;&nbsp;×</h6>
        </div>
      ) : null }
      { categoryData.colorFilter.navy ? (
        <div
          data-name="navy"
          style={getColorPreview('navy')}
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="navy">Navy&nbsp;&nbsp;&nbsp;×</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.green ? (
        <div
          data-name="green"
          style={getColorPreview('green')}
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="green">Green&nbsp;&nbsp;&nbsp;×</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.white ? (
        <div
          data-name="white"
          style={getColorPreview('white')}
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="white">White&nbsp;&nbsp;&nbsp;×</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.grape ? (
        <div
          data-name="grape"
          style={getColorPreview('grape')}
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="grape">Grape&nbsp;&nbsp;&nbsp;×</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.khaki ? (
        <div
          data-name="khaki"
          style={getColorPreview('khaki')}
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="khaki">Khaki&nbsp;&nbsp;&nbsp;×</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.grey ? (
        <div
          data-name="grey"
          style={getColorPreview('grey')}
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="grey">Grey&nbsp;&nbsp;&nbsp;×</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.vintageIndigo ? (
        <div
          data-name="vintageIndigo"
          style={getColorPreview('vintageIndigo')}
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="vintageIndigo">Vintage Indigo&nbsp;&nbsp;&nbsp;×</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.mineralBlue ? (
        <div
          data-name="mineralBlue"
          style={getColorPreview('mineralBlue')}
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="mineralBlue">Mineral Blue&nbsp;&nbsp;&nbsp;×</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.charcoal ? (
        <div
          data-name="charcoal"
          style={getColorPreview('charcoal')}
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="charcoal">Charcoal&nbsp;&nbsp;&nbsp;×</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.tan ? (
        <div
          data-name="tan"
          style={getColorPreview('tan')}
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="tan">Tan&nbsp;&nbsp;&nbsp;×</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.dustyBlue ? (
        <div
          data-name="dustyBlue"
          style={getColorPreview('dustyBlue')}
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="dustyBlue">Dusty Blue&nbsp;&nbsp;&nbsp;×</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.midwash ? (
        <div
          data-name="midwash"
          style={getColorPreview('midwash')}
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="midwash">Midwash&nbsp;&nbsp;&nbsp;×</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.red ? (
        <div
          data-name="red"
          style={getColorPreview('red')}
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="red">Red&nbsp;&nbsp;&nbsp;×</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.rose ? (
        <div
          data-name="rose"
          style={getColorPreview('rose')}
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="rose">Rose&nbsp;&nbsp;&nbsp;×</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.lilac ? (
        <div
          data-name="lilac"
          style={getColorPreview('lilac')}
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="lilac">Lilac&nbsp;&nbsp;&nbsp;×</h6>
        </div>
      ) : null}
    </div>
  );
};

CategoryTagsComponent.propTypes = {
  categoryData: PropTypes.shape({
    clothesFilter: PropTypes.shape({
      jacket: PropTypes.bool.isRequired,
      jeans: PropTypes.bool.isRequired,
      shirts: PropTypes.bool.isRequired,
      tops: PropTypes.bool.isRequired,
      dresses: PropTypes.bool.isRequired,
    }).isRequired,
    genderFilter: PropTypes.shape({
      male: PropTypes.bool.isRequired,
      female: PropTypes.bool.isRequired,
    }).isRequired,
    colorFilter: PropTypes.shape({
      black: PropTypes.bool.isRequired,
      darkestSpruce: PropTypes.bool.isRequired,
      multi: PropTypes.bool.isRequired,
      blue: PropTypes.bool.isRequired,
      blueDenim: PropTypes.bool.isRequired,
      navy: PropTypes.bool.isRequired,
      green: PropTypes.bool.isRequired,
      white: PropTypes.bool.isRequired,
      grape: PropTypes.bool.isRequired,
      khaki: PropTypes.bool.isRequired,
      grey: PropTypes.bool.isRequired,
      vintageIndigo: PropTypes.bool.isRequired,
      mineralBlue: PropTypes.bool.isRequired,
      charcoal: PropTypes.bool.isRequired,
      tan: PropTypes.bool.isRequired,
      dustyBlue: PropTypes.bool.isRequired,
      midwash: PropTypes.bool.isRequired,
      red: PropTypes.bool.isRequired,
      rose: PropTypes.bool.isRequired,
      lilac: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  enableSelectedFilter: PropTypes.func.isRequired,
};

export default CategoryTagsComponent;
