/* eslint-disable no-case-declarations */
import {
  FILTER_CATEGORY,
  SEARCH_CATEGORY,
  EXECUTE_SEARCH,
  DELETE_SEARCH,
} from './categoryFilterTypes';

const initialState = {
  categoryInputComponentClicked: false,
  searchQuery: '',
  enabledTags: {
    search: {
      input: '',
    },
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
  },
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CATEGORY:
      // eslint-disable-next-line no-console
      console.log(action.payload);
      const name = action.payload[0];
      const filterType = action.payload[1];
      return {
        ...state,
        enabledTags: {
          [filterType]: {
            ...state.enabledTags[action.payload[1]],
            [name]: !state.enabledTags[filterType][name],
          },
        },
      };

    case SEARCH_CATEGORY: return {
      ...state,
      searchQuery: action.payload,
    };

    case EXECUTE_SEARCH: return {
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
      category: '',
    };
  }
};

export default categoryReducer;
