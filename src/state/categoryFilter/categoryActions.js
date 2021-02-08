import FILTER_CATEGORY from './categoryFilterTypes';

const filterCategory = (name, filter) => {
  // eslint-disable-next-line no-console
  console.log(name, filter);
  return {
    type: FILTER_CATEGORY,
    name,
    filter,
  };
};

export default filterCategory;
