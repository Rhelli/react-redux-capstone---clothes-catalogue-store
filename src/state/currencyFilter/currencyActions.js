import CHANGE_CURRENCY from './currencyFilterTypes';

const changeCurrency = denomination => ({
  type: CHANGE_CURRENCY,
  payload: denomination,
});

export default changeCurrency;
