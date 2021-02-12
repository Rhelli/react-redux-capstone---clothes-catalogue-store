import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductListComponent from '../ProductListComponent';

configure({ adapter: new Adapter() });

const productName = 'Black T-Shirt';
const price = '10.00';
const images = 'thisIsAnImageURL';
const itemClickThrough = () => 'This is a mock function';

const productListComponent = <ProductListComponent productName={productName} price={price} images={images} itemClickThrough={itemClickThrough} />;

describe('The appearance of the ProductListComponent', () => {
  it('Matches the ProductListComponent snapshot', () => {
    const tree = renderer.create(productListComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Has one single child container, encapsulating both productList components', () => {
    const { container } = render(productListComponent);
    expect(container.firstChild.nodeName).toBe('DIV');
    expect(container.firstChild.classList.contains('productListItem')).toBe(true);
  })
});
