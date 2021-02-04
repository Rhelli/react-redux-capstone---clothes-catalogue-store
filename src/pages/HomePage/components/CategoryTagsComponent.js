/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const CategoryTagsComponent = props => {
  const {
    enableSelectedFilter, genderFilter, colorFilter, clothesFilter,
  } = props;

  return (
    <div>
      {() => {
        if (genderFilter.male) {
          return (
            <div
              data-name="male"
              onClick={event => enableSelectedFilter(event, 'genderFilter')}
            >
              <h6 data-name="male">Mens</h6>
            </div>
          );
        }
        return (
          null
        );
      }}
      {() => {
        if (genderFilter.female) {
          return (
            <div
              data-name="female"
              onClick={event => enableSelectedFilter(event, 'genderFilter')}
            >
              <h6 data-name="female">Womens</h6>
            </div>
          );
        }
        return (
          null
        );
      }}
      {() => {
        if (clothesFilter.jackets) {
          return (
            <div
              data-name="jackets"
              onClick={event => enableSelectedFilter(event, 'clothesFilter')}
            >
              <h6 data-name="jackets">Coats & Jackets</h6>
            </div>
          );
        }
        return (
          null
        );
      }}
      {() => {
        if (clothesFilter.jeans) {
          return (
            <div
              data-name="jeans"
              onClick={event => enableSelectedFilter(event, 'clothesFilter')}
            >
              <h6 data-name="jeans">Jeans</h6>
            </div>
          );
        }
        return (
          null
        );
      }}
      {() => {
        if (clothesFilter.shirts) {
          return (
            <div
              data-name="shirts"
              onClick={event => enableSelectedFilter(event, 'clothesFilter')}
            >
              <h6 data-name="shirts">Shirts</h6>
            </div>
          );
        }
        return (
          null
        );
      }}
      {() => {
        if (clothesFilter.tops) {
          return (
            <div
              data-name="tops"
              onClick={event => enableSelectedFilter(event, 'clothesFilter')}
            >
              <h6 data-name="tops">Tops</h6>
            </div>
          );
        }
        return (
          null
        );
      }}
      {() => {
        if (clothesFilter.dresses) {
          return (
            <div
              data-name="dresses"
              onClick={event => enableSelectedFilter(event, 'clothesFilter')}
            >
              <h6 data-name="dresses">Dresses</h6>
            </div>
          );
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.black) {
          return (
            <div
              data-name="black"
              onClick={event => enableSelectedFilter(event, 'colorFilter')}
            >
              <h6 data-name="black">Black</h6>
            </div>
          );
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.darkestSpruce) {
          return (
            <div
              data-name="darkestSpruce"
              onClick={event => enableSelectedFilter(event, 'colorFilter')}
            >
              <h6 data-name="darkestSpruce">Darkest Spruce</h6>
            </div>
          );
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.multi) {
          return (
            <div
              data-name="multi"
              onClick={event => enableSelectedFilter(event, 'colorFilter')}
            >
              <h6 data-name="multi">Multi</h6>
            </div>
          );
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.blue) {
          return (
            <div
              data-name="blue"
              onClick={event => enableSelectedFilter(event, 'colorFilter')}
            >
              <h6 data-name="blue">Blue</h6>
            </div>
          );
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.blueDenim) {
          return (
            <div
              data-name="blueDenim"
              onClick={event => enableSelectedFilter(event, 'colorFilter')}
            >
              <h6 data-name="blueDenim">Blue Denim</h6>
            </div>
          );
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.navy) {
          return (
            <div
              data-name="navy"
              onClick={event => enableSelectedFilter(event, 'colorFilter')}
            >
              <h6 data-name="navy">Navy</h6>
            </div>
          );
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.green) {
          return (
            <div
              data-name="green"
              onClick={event => enableSelectedFilter(event, 'colorFilter')}
            >
              <h6 data-name="green">Green</h6>
            </div>
          );
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.white) {
          return (
            <div
              data-name="white"
              onClick={event => enableSelectedFilter(event, 'colorFilter')}
            >
              <h6 data-name="white">White</h6>
            </div>
          );
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.grape) {
          return (
            <div
              data-name="grape"
              onClick={event => enableSelectedFilter(event, 'colorFilter')}
            >
              <h6 data-name="grape">Grape</h6>
            </div>
          );
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.khaki) {
          return (
            <div
              data-name="khaki"
              onClick={event => enableSelectedFilter(event, 'colorFilter')}
            >
              <h6 data-name="khaki">Khaki</h6>
            </div>
          );
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.grey) {
          return (
            <div
              data-name="grey"
              onClick={event => enableSelectedFilter(event, 'colorFilter')}
            >
              <h6 data-name="grey">Grey</h6>
            </div>
          );
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.vintageIndigo) {
          return (
            <div
              data-name=""
              onClick={event => enableSelectedFilter(event, 'colorFilter')}
            >
              <h6 data-name="">Vintage Indigo</h6>
            </div>
          );
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.mineralBlue) {
          return (
            <div
              data-name="mineralBlue"
              onClick={event => enableSelectedFilter(event, 'colorFilter')}
            >
              <h6 data-name="mineralBlue">Mineral Blue</h6>
            </div>
          );
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.charcoal) {
          return (
            <div
              data-name="charcoal"
              onClick={event => enableSelectedFilter(event, 'colorFilter')}
            >
              <h6 data-name="charcoal">Charcoal</h6>
            </div>
          );
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.tan) {
          return (
            <div
              data-name="tan"
              onClick={event => enableSelectedFilter(event, 'colorFilter')}
            >
              <h6 data-name="tan">Tan</h6>
            </div>
          );
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.dustyBlue) {
          return (
            <div
              data-name="dustyBlue"
              onClick={event => enableSelectedFilter(event, 'colorFilter')}
            >
              <h6 data-name="dustyBlue">Dusty Blue</h6>
            </div>
          );
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.midwash) {
          return (
            <div
              data-name="midwash"
              onClick={event => enableSelectedFilter(event, 'colorFilter')}
            >
              <h6 data-name="midwash">Midwash</h6>
            </div>
          );
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.red) {
          return (
            <div
              data-name="red"
              onClick={event => enableSelectedFilter(event, 'colorFilter')}
            >
              <h6 data-name="red">Red</h6>
            </div>
          );
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.rose) {
          return (
            <div
              data-name="rose"
              onClick={event => enableSelectedFilter(event, 'colorFilter')}
            >
              <h6 data-name="rose">Rose</h6>
            </div>
          );
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.lilac) {
          return (
            <div
              data-name="lilac"
              onClick={event => enableSelectedFilter(event, 'colorFilter')}
            >
              <h6 data-name="lilac">Lilac</h6>
            </div>
          );
        }
        return (
          null
        );
      }}
    </div>
  );
};

CategoryTagsComponent.propTypes = {
  enableSelectedFilter: PropTypes.func.isRequired,
  genderFilter: PropTypes.string.isRequired,
  colorFilter: PropTypes.string.isRequired,
  clothesFilter: PropTypes.string.isRequired,
};

export default CategoryTagsComponent;
