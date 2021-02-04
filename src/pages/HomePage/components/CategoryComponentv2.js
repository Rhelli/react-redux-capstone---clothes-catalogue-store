/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-restricted-syntax */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import filterCategory from '../../../state/categoryFilter/categoryActions';
import CategoryFilterInputComponent from './CategoryFilterInputComponent';

const enableSelectedFilter = (event, filter) => {
  filterCategory(event.target.dataset.name, filter);
};

const CategoryFilterComponent = ({ categoryData, productData }) => {
  const {
    clothesFilter, genderFilter, colorFilter,
  } = categoryData;

  const filterProducts = (products, filters) => {
    const filterKeys = Object.keys(filters);
    return products.filter(product => filterKeys.every(key => {
      if (!filters[key].length) return true;
      if (Array.isArray(product[key])) {
        return product[key].some(keyElement => filters[key].includes(keyElement));
      }
      return filters[key].includes(product[key]);
    }));
  };

  const filterSelectedTags = () => {
    const enabledTags = {
      clothesCategory: [],
      genderCategory: [],
      colorCategory: [],
    };

    for (const clothesKey in clothesFilter) {
      if (clothesFilter[clothesKey]) enabledTags.clothesCategory.push(clothesKey);
    }

    for (const genderKey in genderFilter) {
      if (genderFilter[genderKey]) enabledTags.genderCategory.push(genderKey);
    }

    for (const colorKey in colorFilter) {
      if (colorFilter[colorKey]) enabledTags.colorCategory.push(colorKey);
    }

    return enabledTags;
  };

  const multiPropsFilter = (products, filters) => {
    const filterKeys = Object.keys(filters);
    return products.filter(product => filterKeys.every(key => {
      if (!filters[key].length) return true;
      if (Array.isArray(product[key])) {
        return product[key].some(keyElement => filters[key].includes(keyElement));
      }
      return filters[key].includes(product[key]);
    }));
  };

  const searchProducts = () => {
    const filteredList = multiPropsFilter(
      productData,
      filterSelectedTags(),
    );
    return filteredList.filter(product => product.name
      .toLowerCase()
      .includes(categoryData.enabledTags.search.input));
  };

  return (
    <div>
      <CategoryFilterInputComponent
        genderFilter={genderFilter}
        clothesFilter={clothesFilter}
        colorFilter={colorFilter}
        enableSelectedFilter={enableSelectedFilter}
      />
    </div>
  )
};

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
  productData: state.productStore,
});

const mapDispatchToProps = dispatch => ({
  enabledSelectedFilter: (event, filter) => {
    dispatch(enableSelectedFilter(event, filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilterComponent);
