import {
  FILTER_CATEGORY,
  SEARCH_CATEGORY,
  EXECUTE_SEARCH,
  DELETE_SEARCH
} from './categoryFilterTypes';

const filterCategory = filterInfo => ({
  type: FILTER_CATEGORY,
  payload: filterInfo,
});

const searchCategory = searchQuery => ({
  type: SEARCH_CATEGORY,
  payload: searchQuery,
});

const executeSearch = searchQuery => ({
  type: EXECTUTE_SEARCH,
  payload: searchQuery,
});

const deleteSearch = () => ({
  type: DELETE_SEARCH,
});

export default filterCategory;
