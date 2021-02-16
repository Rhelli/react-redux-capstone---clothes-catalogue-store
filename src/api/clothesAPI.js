import axios from 'axios';
import { fetchProductsRequest, fetchProductsSuccess, fetchProductsError } from '../state/product/productActions';

const fetchProducts = () => dispatch => {
  dispatch(fetchProductsRequest);
  axios.get('https://api.jsonbin.io/b/6019ae7ddde2a87f921d3310/12', {
    headers: {
      'secret-key': '$2b$10$KohMVQ3o0eP5PqDh/Xwvj.qwMZWdi4NhVvLYWhT8KgvM4sBsn9z.2',
    },
  })
    .then(response => {
      const products = response.data;
      dispatch(fetchProductsSuccess(products));
    })
    .catch(error => {
      const errorMessage = error.message;
      dispatch(fetchProductsError(errorMessage));
    });
};

export default fetchProducts;
