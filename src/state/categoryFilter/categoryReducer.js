/* eslint-disable no-case-declarations */
import FILTER_CATEGORY from './categoryFilterTypes';

const initialState = {
  clothesFilter: {
    jacket: false,
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
  switch (action.type) {
    case FILTER_CATEGORY: return {
      ...state,
      [action.filter]: {
        ...state[action.filter],
        [action.name]: !state[action.filter][action.name],
      },
    };

    default: return {
      ...state,
    };
  }
};

export default categoryReducer;
