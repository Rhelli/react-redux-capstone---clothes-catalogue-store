import {
  FETCH_PRODUCT_ID,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from '../productTypes';

describe('All the product types variable assignation', () => {
  it('Assigns the FETCH_PRODUCT_ID string correctly', () => {
    expect(FETCH_PRODUCT_ID).toBe('FETCH_PRODUCT_ID');
  });

  it('Assigns the FETCH_PRODUCTS_FAILURE string correctly', () => {
    expect(FETCH_PRODUCTS_FAILURE).toBe('FETCH_PRODUCTS_FAILURE');
  });

  it('Assigns the FETCH_PRODUCTS_REQUEST string correctly', () => {
    expect(FETCH_PRODUCTS_REQUEST).toBe('FETCH_PRODUCTS_REQUEST');
  });

  it('Assigns the FETCH_PRODUCTS_SUCCESS string correctly', () => {
    expect(FETCH_PRODUCTS_SUCCESS).toBe('FETCH_PRODUCTS_SUCCESS');
  });
});
