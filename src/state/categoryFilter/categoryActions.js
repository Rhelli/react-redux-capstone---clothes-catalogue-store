import {
  FILTER_CATEGORY,
  SEARCH_CATEGORY,
  EXECUTE_SEARCH,
  DELETE_SEARCH,
} from './categoryFilterTypes';

export const filterCategory = filterInfo => ({
  type: FILTER_CATEGORY,
  payload: filterInfo,
});

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
