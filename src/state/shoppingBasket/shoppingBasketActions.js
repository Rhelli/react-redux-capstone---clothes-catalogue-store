export const ADD_BASKET_ITEM = 'ADD_BASKET_ITEM';
export const REMOVE_BASKET_ITEM = 'REMOVE_BASKET_ITEM';

export const addBasketItem = product => ({
  type: ADD_BASKET_ITEM,
  payload: product,
});

export const removeBasketItem = product => ({
  type: REMOVE_BASKET_ITEM,
  payload: product,
});
