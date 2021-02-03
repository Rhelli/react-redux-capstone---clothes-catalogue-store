import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import shoppingBasketReducer from './shoppingBasket/shoppingBasketReducer';
import categoryReducer from './categoryFilter/categoryReducer';
import currencyReducer from './currencyFilter/currencyReducer';
import productReducer from './product/productReducer';

const root = combineReducers({
  basketStore: shoppingBasketReducer,
  categoryStore: categoryReducer,
  currencyStore: currencyReducer,
  productStore: productReducer,
});

const store = createStore(root, applyMiddleware(thunk));

export default store;
