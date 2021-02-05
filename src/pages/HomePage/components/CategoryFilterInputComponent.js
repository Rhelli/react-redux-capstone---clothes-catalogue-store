import React from 'react';
import PropTypes from 'prop-types';
import CategoryTagsComponent from './CategoryTagsComponent';
import FilterTagsComponent from './FilterTagsComponent';

const CategoryFilterInputComponent = props => {
  const {
    categoryData, enableSelectedFilter,
  } = props;

  return (
    <div>
      <div>
        <CategoryTagsComponent
          enableSelectedFilter={enableSelectedFilter}
          categoryData={categoryData}
        />
      </div>
      <div>
        <FilterTagsComponent
          enableSelectedFilter={enableSelectedFilter}
        />
      </div>
    </div>
  );
};

CategoryFilterInputComponent.propTypes = {
  enableSelectedFilter: PropTypes.func.isRequired,
  categoryData: PropTypes.shape({
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

export default CategoryFilterInputComponent;
