/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterTagsComponent.module.css';

const FilterTagsComponent = props => {
  const { enableSelectedFilter } = props;

  return (
    <div className={styles.filterTagsContainer}>
      <div className={styles.filterCategory}>
        <h4>Gender</h4>
        <div>
          <div
            className={styles.tag}
            data-name="male"
            onClick={event => enableSelectedFilter(event, 'genderFilter')}
          >
            <h6 data-name="mens">Mens</h6>
          </div>
          <div
            className={styles.tag}
            data-name="female"
            onClick={event => enableSelectedFilter(event, 'genderFilter')}
          >
            <h6 data-name="female">Womens</h6>
          </div>
        </div>
      </div>
      <div className={styles.filterCategory}>
        <h4>Clothes</h4>
        <div
          data-name="jackets"
          onClick={event => enableSelectedFilter(event, 'clothesFilter')}
        >
          <h6 data-name="jackets">Coats & Jackets</h6>
        </div>
        <div
          data-name="jeans"
          onClick={event => enableSelectedFilter(event, 'clothesFilter')}
        >
          <h6 data-name="jeans">Jeans</h6>
        </div>
        <div
          data-name="shirts"
          onClick={event => enableSelectedFilter(event, 'clothesFilter')}
        >
          <h6 data-name="shirts">Shirts</h6>
        </div>
        <div
          data-name="tops"
          onClick={event => enableSelectedFilter(event, 'clothesFilter')}
        >
          <h6 data-name="tops">Tops</h6>
        </div>
        <div
          data-name="dresses"
          onClick={event => enableSelectedFilter(event, 'clothesFilter')}
        >
          <h6 data-name="dresses">Dresses</h6>
        </div>
      </div>
      <div className={[styles.filterCategory, styles.colorCategory].join(' ')}>
        <h4>Color</h4>
        <div
          data-name="black"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="black">Black</h6>
        </div>
        <div
          data-name="darkestSpruce"
          data-filter="sprucestDark"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="darkestSpruce">Darkest Spruce</h6>
        </div>
        <div
          data-name="multi"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="multi">Multi</h6>
        </div>
        <div
          data-name="blue"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="blue">Blue</h6>
        </div>
        <div
          data-name="blueDenim"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="blueDenim">Blue Denim</h6>
        </div>
        <div
          data-name="navy"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="navy">Navy</h6>
        </div>
        <div
          data-name="green"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="green">Green</h6>
        </div>
        <div
          data-name="white"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="white">White</h6>
        </div>
        <div
          data-name="grape"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="grape">Grape</h6>
        </div>
        <div
          data-name="khaki"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="khaki">Khaki</h6>
        </div>
        <div
          data-name="grey"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="grey">Grey</h6>
        </div>
        <div
          data-name="vintageIndigo"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="">Vintage Indigo</h6>
        </div>
        <div
          data-name="mineralBlue"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="mineralBlue">Mineral Blue</h6>
        </div>
        <div
          data-name="charcoal"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="charcoal">Charcoal</h6>
        </div>
        <div
          data-name="tan"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="tan">Tan</h6>
        </div>
        <div
          data-name="dustyBlue"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="dustyBlue">Dusty Blue</h6>
        </div>
        <div
          data-name="midwash"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="midwash">Midwash</h6>
        </div>
        <div
          data-name="red"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="red">Red</h6>
        </div>
        <div
          data-name="rose"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="rose">Rose</h6>
        </div>
        <div
          data-name="lilac"
          onClick={event => enableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="lilac">Lilac</h6>
        </div>
      </div>
    </div>
  );
};

FilterTagsComponent.propTypes = {
  enableSelectedFilter: PropTypes.func.isRequired,
};

export default FilterTagsComponent;
