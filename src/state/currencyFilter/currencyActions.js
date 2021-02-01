const CHANGE_CURRENCY = 'CHANGE_CURRENCY';

const changeCurrency = denomination => ({
  type: CHANGE_CURRENCY,
  payload: denomination,
});

export default changeCurrency;
