/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const CategoryTagsComponent = props => {
  const {
    categoryData, enableSelectedFilter,
  } = props;

  return (
    <div className="categoryTagsComponentContainer">
      { categoryData.genderFilter.male ? (
        <div
          data-name="male"
          onClick={event => enableSelectedFilter(event, 'genderFilter')}
        >
          <h6 data-name="male">Mens</h6>
        </div>
      ) : null}
      { categoryData.genderFilter.female ? (
        <div
          data-name="female"
          onClick={event => enableSelectedFilter(event, 'genderFilter')}
        >
          <h6 data-name="female">Womens</h6>
        </div>
      ) : null}
      { categoryData.clothesFilter.jacket ? (
        <div
          data-name="jacket"
          onClick={event => enableSelectedFilter(event, 'clothesFilter')}
        >
          <h6 data-name="jacket">Coats & Jackets</h6>
        </div>
      ) : null}
      { categoryData.clothesFilter.jeans ? (
        <div
          data-name="jeans"
          onClick={event => enableSelectedFilter(event, 'clothesFilter')}
        >
          <h6 data-name="jeans">Jeans</h6>
        </div>
      ) : null}
      { categoryData.clothesFilter.shirts ? (
        <div
          data-name="shirts"
          onClick={event => enableSelectedFilter(event, 'clothesFilter')}
        >
          <h6 data-name="shirts">Shirts</h6>
        </div>
      ) : null}
      { categoryData.clothesFilter.tops ? (
        <div
          data-name="tops"
          onClick={event => enableSelectedFilter(event, 'clothesFilter')}
        >
          <h6 data-name="tops">Tops</h6>
        </div>
      ) : null}
      { categoryData.clothesFilter.dresses ? (
        <div
          data-name="dresses"
          onClick={event => enableSelectedFilter(event, 'clothesFilter')}
        >
          <h6 data-name="dresses">Dresses</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.black ? (
        <div
          data-name="black"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="black">Black</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.darkestSpruce ? (
        <div
          data-name="darkestSpruce"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="darkestSpruce">Darkest Spruce</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.multi ? (
        <div
          data-name="multi"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="multi">Multi</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.blue ? (
        <div
          data-name="blue"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="blue">Blue</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.blueDenim ? (
        <div
          data-name="blueDenim"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="blueDenim">Blue Denim</h6>
        </div>
      ) : null }
      { categoryData.colorFilter.navy ? (
        <div
          data-name="navy"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="navy">Navy</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.green ? (
        <div
          data-name="green"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="green">Green</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.white ? (
        <div
          data-name="white"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="white">White</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.grape ? (
        <div
          data-name="grape"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="grape">Grape</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.khaki ? (
        <div
          data-name="khaki"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="khaki">Khaki</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.grey ? (
        <div
          data-name="grey"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="grey">Grey</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.vintageIndigo ? (
        <div
          data-name="vintageIndigo"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="vintageIndigo">Vintage Indigo</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.mineralBlue ? (
        <div
          data-name="mineralBlue"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="mineralBlue">Mineral Blue</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.charcoal ? (
        <div
          data-name="charcoal"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="charcoal">Charcoal</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.tan ? (
        <div
          data-name="tan"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="tan">Tan</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.dustyBlue ? (
        <div
          data-name="dustyBlue"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="dustyBlue">Dusty Blue</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.midwash ? (
        <div
          data-name="midwash"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="midwash">Midwash</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.red ? (
        <div
          data-name="red"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="red">Red</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.rose ? (
        <div
          data-name="rose"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="rose">Rose</h6>
        </div>
      ) : null}
      { categoryData.colorFilter.lilac ? (
        <div
          data-name="lilac"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="lilac">Lilac</h6>
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
