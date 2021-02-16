import categoryReducer from '../categoryReducer';
import filterCategory from '../categoryActions';

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

describe('The functionality of the categoryReducer', () => {
  it('Will accept and enable a boolean filter when passed the right action', () => {
    const filterJeans = filterCategory('jeans', 'clothesFilter');
    const modifiedReducer = categoryReducer(initialState, filterJeans);
    expect(modifiedReducer.clothesFilter.jeans).toBe(true);
  });

  it('Will accept and disable a boolean filter if it is already enabled', () => {
    const filterDresses = filterCategory('dresses', 'clothesFilter');
    const enabledReducer = categoryReducer(initialState, filterDresses);
    expect(enabledReducer.clothesFilter.dresses).toBe(true);
    const disabledReducer = categoryReducer(enabledReducer, filterDresses);
    expect(disabledReducer.clothesFilter.dresses).toBe(false);
  });
});
