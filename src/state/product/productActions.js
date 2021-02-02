import axios from 'axios';
import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from './productTypes';

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

export const fetchProducts = () => dispatch => {
  dispatch(fetchProductsRequest);
  axios.get('https://api.jsonbin.io/b/6019ae7ddde2a87f921d3310/5', {
    headers: {
      'secret-key': '$2b$10$KohMVQ3o0eP5PqDh/Xwvj.qwMZWdi4NhVvLYWhT8KgvM4sBsn9z.2',
    },
  })
    .then(response => {
      const products = response.data;
      // eslint-disable-next-line no-console
      console.log(products);
      dispatch(fetchProductsSuccess(products));
    })
    .catch(error => {
      const errorMessage = error.message;
      dispatch(fetchProductsError(errorMessage));
    });
};
