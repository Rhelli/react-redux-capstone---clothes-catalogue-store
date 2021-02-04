import FILTER_CATEGORY from './categoryActions';

const initialState = {
  enabledTags: {
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
  // eslint-disable-next-line no-console
  console.log(action.payload);
  const name = action.payload[0];
  const filterType = action.payload[1];
  switch (action.type) {
    case FILTER_CATEGORY:
      return {
        ...state,
        enabledTags: {
          [filterType]: {
            ...state.enabledTags[filterType],
            [name]: !state.enabledTags[filterType][name],
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
