import {
  fetchProductsRequest, fetchProductsSuccess, fetchProductsError, fetchProductID,
} from '../productActions';

describe('The fetchProductsRequest action', () => {
  it('Only returns the action type, FETCH_PRODUCTS_REQUEST', () => {
    const productRequest = fetchProductsRequest();
    expect(productRequest.type).toBe('FETCH_PRODUCTS_REQUEST');
  });
});

describe('The fetchProductsSuccess action', () => {
  it('Returns the action type and payload, of which is an array', () => {
    const exampleProducts = ['t-shirt', 'shorts', 'cap'];
    const productSuccess = fetchProductsSuccess(exampleProducts);
    expect(productSuccess.type).toBe('FETCH_PRODUCTS_SUCCESS');
    expect(productSuccess.payload).toBe(exampleProducts);
  });
});

describe('The fetchProductsError action', () => {
  it('Returns an action type and an error message, which is a string', () => {
    const exampleError = '404: Not found';
    const productError = fetchProductsError(exampleError);
    expect(productError.type).toBe('FETCH_PRODUCTS_FAILURE');
    expect(productError.payload).toBe(exampleError);
  });
});

describe('The fetchProductID action', () => {
  it('Returns an action type and payload which is a single product', () => {
    const exampleProduct = { productName: 'Timberland Top', brandName: 'Timberland', color: 'Brown' };
    const productID = fetchProductID(exampleProduct);
    expect(productID.type).toBe('FETCH_PRODUCT_ID');
    expect(productID.payload).toBe(exampleProduct);
  });
});
