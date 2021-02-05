import {
  FILTER_CATEGORY,
  SEARCH_CATEGORY,
  EXECUTE_SEARCH,
  DELETE_SEARCH,
} from './categoryFilterTypes';

export const filterCategory = (name, filter) => {
  // eslint-disable-next-line no-console
  console.log(name, filter);
  return {
    type: FILTER_CATEGORY,
    payload: [name, filter],
  };
};

export const searchCategory = searchQuery => ({
  type: SEARCH_CATEGORY,
  payload: searchQuery,
});

export const executeSearch = searchQuery => ({
  type: EXECUTE_SEARCH,
  payload: searchQuery,
});

export const deleteSearch = () => ({
  type: DELETE_SEARCH,
});
