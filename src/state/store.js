import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import shoppingBasketReducer from './shoppingBasket/shoppingBasketReducer';
import categoryReducer from './categoryFilter/categoryReducer';
import currencyReducer from './currencyFilter/currencyReducer';
import productReducer from './product/productReducer';

const root = combineReducers({
  basketStore: shoppingBasketReducer,
  currencyStore: currencyReducer,
  categoryStore: categoryReducer,
  productStore: productReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, root);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
