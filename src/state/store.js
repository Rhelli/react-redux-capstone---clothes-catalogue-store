import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import categoryReducer from './categoryFilter/categoryReducer';
import productReducer from './product/productReducer';

const root = combineReducers({
  categoryStore: categoryReducer,
  productStore: productReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, root);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
