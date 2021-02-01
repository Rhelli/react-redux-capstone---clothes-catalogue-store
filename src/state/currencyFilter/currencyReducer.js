import CHANGE_CURRENCY from './currencyActions';

const initialState = {
  currency: 'GBP',
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY:
      if (action.payload === 'GBP') {
        return {
          ...state,
          currency: '',
        };
      }
      return {
        ...state,
        currency: action.payload,
      };

    default: return {
      ...state,
      currency: 'GBP',
    };
  }
};

export default currencyReducer;
