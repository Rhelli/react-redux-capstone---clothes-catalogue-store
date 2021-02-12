/* eslint-disable max-len */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductListInfoComponent from '../ProductListInfoComponent';

configure({ adapter: new Adapter() });

const productName = 'Black T-Shirt';
const price = '10.00';
const productListInfoComponent = <ProductListInfoComponent productName={productName} price={price} />;

describe('The appearance of the ProductListInfoComponent', () => {
  it('Matches the ProductListInfoComponent snapshot', () => {
    const tree = renderer.create(productListInfoComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Has an outer container with the correct className', () => {
    const { container } = render(productListInfoComponent);
    expect(container.firstChild.nodeName).toBe('DIV');
    expect(container.firstChild.classList.contains('productListInfoContainer')).toBe(true);
  });

  it('Has two child containers, both with the correct classNames', () => {
    const { container } = render(productListInfoComponent);
    expect(container.firstChild.firstChild.nodeName).toBe('DIV');
    expect(container.firstChild.firstChild.classList.contains('productListInfoNameContainer')).toBe(true);
    expect(container.firstChild.lastChild.nodeName).toBe('DIV');
    expect(container.firstChild.lastChild.classList.contains('productListInfoPriceContainer')).toBe(true);
  });

  it('Displays both the products name as well as the products price, within the correct tags', () => {
    const { container, getByText } = render(productListInfoComponent);
    expect(container.firstChild.firstChild.firstChild.nodeName).toBe('H3');
    getByText('Black T-Shirt');
    expect(container.firstChild.lastChild.firstChild.nodeName).toBe('H5');
    getByText('£10.00');
  });
});
