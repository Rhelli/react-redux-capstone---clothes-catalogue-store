import FILTER_CATEGORY from './categoryFilterTypes';

const filterCategory = (name, filter) => ({
  type: FILTER_CATEGORY,
  name,
  filter,
});

export default filterCategory;
