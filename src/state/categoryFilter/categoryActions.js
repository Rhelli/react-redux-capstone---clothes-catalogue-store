import FILTER_CATEGORY from './categoryFilterTypes';

const filterCategory = category => ({
  type: FILTER_CATEGORY,
  payload: category,
});

export default filterCategory;
