import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductListImageComponent from '../ProductListImageComponent';

configure({ adapter: new Adapter() });

const images = 'thisIsAnImageURL';
const productListImageComponent = <ProductListImageComponent images={images} />;

describe('The appearance of the ProductListImageComponent', () => {
  it('Matches the ProductListImageComponent snapshot', () => {
    const tree = renderer.create(productListImageComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Has only one child, with the correct className', () => {
    const { container } = render(productListImageComponent);
    expect(container.childElementCount).toEqual(1);
    expect(container.firstChild.nodeName).toBe('DIV');
    expect(container.firstChild.classList.contains('productListImage'));
  });

  it('Contains a single image tag which contains a non-null src value', () => {
    const { container } = render(productListImageComponent);
    expect(container.firstChild.firstChild.nodeName).toBe('IMG');
    expect(container.firstChild.firstChild).toHaveAttribute('src', 'thisIsAnImageURL');
  });
});
