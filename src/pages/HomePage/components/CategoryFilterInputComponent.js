import React from 'react';
import PropTypes from 'prop-types';
import CategoryTagsComponent from './CategoryTagsComponent';

const CategoryFilterInputComponent = props => {
  const {
    enableSelectedFilter, genderFilter, clothesFilter, colorFilter,
  } = props;

  return (
    <div>
      <div>
        <CategoryTagsComponent
          enableSelectedFilter={enableSelectedFilter}
          genderFilter={genderFilter}
          clothesFilter={clothesFilter}
          colorFilter={colorFilter}
        />
      </div>
    </div>
  );
};

CategoryFilterInputComponent.propTypes = {
  enableSelectedFilter: PropTypes.func.isRequired,
  genderFilter: PropTypes.string.isRequired,
  colorFilter: PropTypes.string.isRequired,
  clothesFilter: PropTypes.string.isRequired,
};

export default CategoryFilterInputComponent;
