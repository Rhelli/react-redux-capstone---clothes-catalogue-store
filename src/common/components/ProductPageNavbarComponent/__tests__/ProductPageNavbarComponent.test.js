import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import ProductPageNavbarComponent from '../ProductPageNavbarComponent';

describe('The appearance of the ProductPageNavbarComponent', () => {
  it('Matches the ProductPageNavbarComponent snapshot', () => {
    const snapshot = renderer.create(<ProductPageNavbarComponent />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('Contains two main div containers', () => {
    const { container } = render(<ProductPageNavbarComponent />);
    expect(container.firstChild.childElementCount).toEqual(2);
  });

  it('Has an anchor link to the home page as its first element', () => {
    const { container } = render(<ProductPageNavbarComponent />);
    expect(container.firstChild.firstChild.nodeName).toBe('DIV');
    expect(container.firstChild.firstChild.classList.contains('navbarLink'));
    expect(container.firstChild.firstChild.firstChild.nodeName).toBe('A');
    expect(container.firstChild.firstChild.firstChild).toHaveAttribute('href', '/');
  });

  it('Has the brand text as the last element of the navbar', () => {
    const { container, getByText } = render(<ProductPageNavbarComponent />);
    expect(container.firstChild.lastChild.nodeName).toBe('DIV');
    expect(container.firstChild.lastChild.classList.contains('navbarTitle')).toBe(true);
    expect(container.firstChild.lastChild.firstChild.nodeName).toBe('H1');
    getByText('Clothes Inc.');
  });
});
