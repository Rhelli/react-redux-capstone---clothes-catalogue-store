import { createStore, combineReducers } from 'redux';
import shoppingBasketReducer from './shoppingBasket/shoppingBasketReducer';
import categoryReducer from './categoryFilter/categoryReducer';
import currencyReducer from './currencyFilter/currencyReducer';

const root = combineReducers({
  basketStore: shoppingBasketReducer,
  categoryStore: categoryReducer,
  currencyStore: currencyReducer,
});

const store = createStore(root);

export default store;
