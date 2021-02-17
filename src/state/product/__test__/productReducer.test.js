import productReducer from '../productReducer';
import {
  fetchProductID,
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsError,
} from '../productActions';

const initialState = {
  loading: true,
  products: [],
  singleProduct: [],
  error: '',
};

describe('The functionality and returns of the productReducer', () => {
  it('Accepts a product request action and sets loading to true', () => {
    const requestProduct = fetchProductsRequest();
    const modifiedState = productReducer(initialState, requestProduct);
    expect(modifiedState.loading).toBe(true);
  });

  it('Accepts a product success action and sets loading to false, the error string to null and populated the products array', () => {
    const products = [{ productOne: 1 }, { productTwo: 2 }, { product3: 3 }];
    const productSuccess = fetchProductsSuccess(products);
    const successfulState = productReducer(initialState, productSuccess);
    expect(successfulState.products).toBe(products);
    expect(successfulState.loading).toBe(false);
    expect(successfulState.error).toBe('');
  });

  it('Accepts a product failure action, setting loading to false, the products array to null and populating the error', () => {
    const error = fetchProductsError('404: not found');
    const failedState = productReducer(initialState, error);
    expect(failedState.loading).toBe(false);
    expect(failedState.products.length).toBe(0);
    expect(failedState.error).toBe('404: not found');
  });

  it('Accepts a productID fetch action and returns a single products information', () => {
    const product = [{ productName: 'T-shirt', color: 'Black' }];
    const singleProductAction = fetchProductID(product);
    const singleProductState = productReducer(initialState, singleProductAction);
    expect(singleProductState.singleProduct).toBe(product);
  });
});
