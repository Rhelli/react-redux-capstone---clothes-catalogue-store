import FILTER_CATEGORY from './categoryFilterTypes';

const filterCategory = filterInfo => ({
  type: FILTER_CATEGORY,
  payload: filterInfo,
});

export default filterCategory;
