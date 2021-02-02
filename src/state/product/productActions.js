import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from './productTypes';
import axios from 'axios';

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsError = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const fetchProducts = () => (dispatch) => {
  dispatch(fetchProductsRequest)
  axios.get('url')
    .then(response => {
      const products = response.data
      dispatch(fetchProductsSuccess(products))
    })
    .catch(error => {
      const errorMessage = error.message
      dispatch(fetchProductsError(errorMessage))
    });
};
