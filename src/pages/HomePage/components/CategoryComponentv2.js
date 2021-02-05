/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-restricted-syntax */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import CategoryFilterInputComponent from './CategoryFilterInputComponent';

const CategoryFilterComponent = ({ categoryData }) => (
  <div>
    <div>
      <CategoryFilterInputComponent
        enabledTags={categoryData.enabledTags}
      />
    </div>
  </div>
);

CategoryFilterComponent.propTypes = {
  categoryData: PropTypes.shape({
    categoryInputComponentClicked: PropTypes.bool.isRequired,
    searchQuery: PropTypes.string,
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
  }).isRequired,
};

const mapStateToProps = state => ({
  categoryData: state.categoryStore,
});

export default connect(mapStateToProps)(CategoryFilterComponent);
