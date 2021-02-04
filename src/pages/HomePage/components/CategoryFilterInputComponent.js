import React from 'react';
import PropTypes from 'prop-types';
import CategoryTagsComponent from './CategoryTagsComponent';
import CategorySearchComponent from './CategorySearchComponent';
import FilterTagsComponent from './FilterTagsComponent';

const CategoryFilterInputComponent = props => {
  const {
    enabledTags, enableSelectedFilter,
    searchQuery, searchSubmitListener, searchListener, cancelSearch,
  } = props;

  return (
    <div>
      <div>
        <CategoryTagsComponent
          cancelSearch={cancelSearch}
          enableSelectedFilter={enableSelectedFilter}
          enabledTags={enabledTags}
        />
      </div>
      <div>
        <CategorySearchComponent
          searchListener={searchListener}
          searchSubmitListener={searchSubmitListener}
          searchQuery={searchQuery}
        />
      </div>
      <div>
        <FilterTagsComponent enableSelectedFilter={enableSelectedFilter} />
      </div>
    </div>
  );
};

CategoryFilterInputComponent.propTypes = {
  enableSelectedFilter: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  cancelSearch: PropTypes.func.isRequired,
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
  searchListener: PropTypes.func.isRequired,
  searchSubmitListener: PropTypes.func.isRequired,
};

export default CategoryFilterInputComponent;
