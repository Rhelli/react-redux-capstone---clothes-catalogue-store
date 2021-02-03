import { ADD_BASKET_ITEM, REMOVE_BASKET_ITEM } from './shoppingBasketTypes';

export const addBasketItem = product => ({
  type: ADD_BASKET_ITEM,
  payload: product,
});

export const removeBasketItem = product => ({
  type: REMOVE_BASKET_ITEM,
  payload: product,
});
