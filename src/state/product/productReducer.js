import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_ID,
} from './productTypes';

const initialState = {
  loading: true,
  products: [],
  singleProduct: [],
  error: '',
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST: return {
      ...state,
      loading: true,
    };

    case FETCH_PRODUCTS_SUCCESS: return {
      ...state,
      loading: false,
      products: action.payload,
      error: '',
    };

    case FETCH_PRODUCTS_FAILURE: return {
      ...state,
      loading: false,
      products: [],
      error: action.payload,
    };

    case FETCH_PRODUCT_ID:
      return {
        ...state,
        singleProduct: action.payload,
      };

    default: return {
      ...state,
    };
  }
};

export default productReducer;
