import { ADD_BASKET_ITEM, REMOVE_BASKET_ITEM } from './shoppingBasketActions';

const initialState = {
  shoppingBasket: [],
};

const shoppingBasketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BASKET_ITEM: return {
      ...state,
      shoppingBasket: state.shoppingBasket.concat(action.payload),
    };

    case REMOVE_BASKET_ITEM: return {
      ...state,
      shoppingBasket: state.shoppingBasket.filter(product => product.id !== action.payload.id),
    };

    default: return {
      ...state,
    };
  }
};

export default shoppingBasketReducer;
