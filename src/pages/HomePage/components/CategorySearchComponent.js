import React from 'react';
import PropTypes from 'prop-types';

const CategorySearchComponent = props => {
  const { searchQuery, searchListener } = props;

  return (
    <div>
      <form>
        <input
          type="text"
          value={searchQuery}
          placeholder="Search The Catalogue..."
          onChange={searchListener}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

CategorySearchComponent.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  searchListener: PropTypes.func.isRequired,
};

export default CategorySearchComponent;
