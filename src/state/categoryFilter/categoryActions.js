const FILTER_CATEGORY = 'FILTER_CATEGORY';

const filterCategory = category => ({
  type: FILTER_CATEGORY,
  payload: category,
});

export default filterCategory;
