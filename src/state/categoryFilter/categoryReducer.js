import {
  FILTER_CATEGORY,
  SEARCH_CATEGORY,
  EXECUTE_SEARCH,
  DELETE_SEARCH,
} from './categoryFilterTypes';

const initialState = {
  clothesFilter: {
    jackets: false,
    jeans: false,
    shirts: false,
    tops: false,
    dresses: false,
  },
  genderFilter: {
    male: false,
    female: false,
  },
  colorFilter: {
    black: false,
    darkestSpruce: false,
    multi: false,
    blue: false,
    blueDenim: false,
    navy: false,
    green: false,
    white: false,
    grape: false,
    khaki: false,
    grey: false,
    vintageIndigo: false,
    mineralBlue: false,
    charcoal: false,
    tan: false,
    dustyBlue: false,
    midwash: false,
    red: false,
    rose: false,
    lilac: false,
  },
  priceFilter: {
    highToLow: false,
    lowToHigh: false,
  },
};

const categoryReducer = (state = initialState, action) => {
  // eslint-disable-next-line no-console
  console.log('categoryReducerCalled');
  switch (action.type) {
    case FILTER_CATEGORY:
      // eslint-disable-next-line no-console
      console.log(action.payload[1]);
      return {
        ...state,
        [action.payload[1]]: {
          ...state[action.payload[1]],
          [action.payload[0]]: !state[action.payload[1]][action.payload[0]],
        },
      };

    case SEARCH_CATEGORY:
      // eslint-disable-next-line no-console
      console.log(action.payload);
      return {
        ...state,
        searchQuery: action.payload,
      };

    case EXECUTE_SEARCH:
      // eslint-disable-next-line no-console
      console.log(action.payload);
      return {
        ...state,
        enabledTags: {
          ...state.enabledTags,
          search: {
            input: action.payload,
          },
        },
      };

    case DELETE_SEARCH: return {
      ...state,
      enabledTags: {
        ...state.enabledTags,
        search: {
          input: '',
        },
      },
    };

    default: return {
      ...state,
    };
  }
};

export default categoryReducer;
