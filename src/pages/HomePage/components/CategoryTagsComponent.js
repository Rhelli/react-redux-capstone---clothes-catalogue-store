/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterCategory } from '../../../state/categoryFilter/categoryActions';

const CategoryTagsComponent = props => {
  const {
    enabledTags,
  } = props;

  const disableSelectedFilter = (event, filter) => {
    // eslint-disable-next-line no-console
    console.log(event.target.dataset.name, filter);
    filterCategory(event.target.dataset.name, filter);
  };

  return (
    <div>
      { enabledTags.genderFilter.male ? (
        <div
          data-name="male"
          onClick={event => disableSelectedFilter(event, 'genderFilter')}
        >
          <h6 data-name="male">Mens</h6>
        </div>
      ) : null}
      { enabledTags.genderFilter.female ? (
        <div
          data-name="female"
          onClick={event => disableSelectedFilter(event, 'genderFilter')}
        >
          <h6 data-name="female">Womens</h6>
        </div>
      ) : null}
      { enabledTags.clothesFilter.jackets ? (
        <div
          data-name="jackets"
          onClick={event => disableSelectedFilter(event, 'clothesFilter')}
        >
          <h6 data-name="jackets">Coats & Jackets</h6>
        </div>
      ) : null}
      { enabledTags.clothesFilter.jeans ? (
        <div
          data-name="jeans"
          onClick={event => disableSelectedFilter(event, 'clothesFilter')}
        >
          <h6 data-name="jeans">Jeans</h6>
        </div>
      ) : null}
      { enabledTags.clothesFilter.shirts ? (
        <div
          data-name="shirts"
          onClick={event => disableSelectedFilter(event, 'clothesFilter')}
        >
          <h6 data-name="shirts">Shirts</h6>
        </div>
      ) : null}
      { enabledTags.clothesFilter.tops ? (
        <div
          data-name="tops"
          onClick={event => disableSelectedFilter(event, 'clothesFilter')}
        >
          <h6 data-name="tops">Tops</h6>
        </div>
      ) : null}
      { enabledTags.clothesFilter.dresses ? (
        <div
          data-name="dresses"
          onClick={event => disableSelectedFilter(event, 'clothesFilter')}
        >
          <h6 data-name="dresses">Dresses</h6>
        </div>
      ) : null}
      { enabledTags.colorFilter.black ? (
        <div
          data-name="black"
          onClick={event => disableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="black">Black</h6>
        </div>
      ) : null}
      { enabledTags.colorFilter.darkestSpruce ? (
        <div
          data-name="darkestSpruce"
          onClick={event => disableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="darkestSpruce">Darkest Spruce</h6>
        </div>
      ) : null}
      { enabledTags.colorFilter.multi ? (
        <div
          data-name="multi"
          onClick={event => disableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="multi">Multi</h6>
        </div>
      ) : null}
      { enabledTags.colorFilter.blue ? (
        <div
          data-name="blue"
          onClick={event => disableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="blue">Blue</h6>
        </div>
      ) : null}
      { enabledTags.colorFilter.blueDenim ? (
        <div
          data-name="blueDenim"
          onClick={event => disableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="blueDenim">Blue Denim</h6>
        </div>
      ) : null }
      { enabledTags.colorFilter.navy ? (
        <div
          data-name="navy"
          onClick={event => disableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="navy">Navy</h6>
        </div>
      ) : null}
      { enabledTags.colorFilter.green ? (
        <div
          data-name="green"
          onClick={event => disableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="green">Green</h6>
        </div>
      ) : null}
      { enabledTags.colorFilter.white ? (
        <div
          data-name="white"
          onClick={event => disableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="white">White</h6>
        </div>
      ) : null}
      { enabledTags.colorFilter.grape ? (
        <div
          data-name="grape"
          onClick={event => disableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="grape">Grape</h6>
        </div>
      ) : null}
      { enabledTags.colorFilter.khaki ? (
        <div
          data-name="khaki"
          onClick={event => disableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="khaki">Khaki</h6>
        </div>
      ) : null}
      { enabledTags.colorFilter.grey ? (
        <div
          data-name="grey"
          onClick={event => disableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="grey">Grey</h6>
        </div>
      ) : null}
      { enabledTags.colorFilter.vintageIndigo ? (
        <div
          data-name="vintageIndigo"
          onClick={event => disableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="">Vintage Indigo</h6>
        </div>
      ) : null}
      { enabledTags.colorFilter.mineralBlue ? (
        <div
          data-name="mineralBlue"
          onClick={event => disableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="mineralBlue">Mineral Blue</h6>
        </div>
      ) : null}
      { enabledTags.colorFilter.charcoal ? (
        <div
          data-name="charcoal"
          onClick={event => disableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="charcoal">Charcoal</h6>
        </div>
      ) : null}
      { enabledTags.colorFilter.tan ? (
        <div
          data-name="tan"
          onClick={event => disableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="tan">Tan</h6>
        </div>
      ) : null}
      { enabledTags.colorFilter.dustyBlue ? (
        <div
          data-name="dustyBlue"
          onClick={event => disableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="dustyBlue">Dusty Blue</h6>
        </div>
      ) : null}
      { enabledTags.colorFilter.midwash ? (
        <div
          data-name="midwash"
          onClick={event => disableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="midwash">Midwash</h6>
        </div>
      ) : null}
      { enabledTags.colorFilter.red ? (
        <div
          data-name="red"
          onClick={event => disableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="red">Red</h6>
        </div>
      ) : null}
      { enabledTags.colorFilter.rose ? (
        <div
          data-name="rose"
          onClick={event => disableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="rose">Rose</h6>
        </div>
      ) : null}
      { enabledTags.colorFilter.lilac ? (
        <div
          data-name="lilac"
          onClick={event => disableSelectedFilter(event, 'colorFilter')}
        >
          <h6 data-name="lilac">Lilac</h6>
        </div>
      ) : null}
    </div>
  );
};

CategoryTagsComponent.propTypes = {
  enabledTags: PropTypes.shape({
    search: PropTypes.shape({
      input: PropTypes.string,
    }),
    clothesFilter: PropTypes.shape({
      jackets: PropTypes.bool.isRequired,
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
};

const mapDispatchToProps = dispatch => ({
  filterCategory: () => dispatch(filterCategory),
});

export default connect(mapDispatchToProps)(CategoryTagsComponent);
