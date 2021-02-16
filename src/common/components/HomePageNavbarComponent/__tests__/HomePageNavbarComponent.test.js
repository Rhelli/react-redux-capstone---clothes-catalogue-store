import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import HomePageNavbarComponent from '../HomePageNavbarComponent';

describe('The appearance of the HomePageNavbarComponent', () => {
  it('Matches the HomePageNavbarComponent snapshot', () => {
    const navbarSnapshot = renderer.create(<HomePageNavbarComponent />).toJSON();
    expect(navbarSnapshot).toMatchSnapshot();
  });

  it('Has only one element, being the title branding', () => {
    const { container, getByText } = render(<HomePageNavbarComponent />);
    expect(container.firstChild.firstChild.firstChild.nodeName).toBe('H1');
    getByText('Clothes Inc.');
  });

  it('Has a two dimensional container structure', () => {
    const { container } = render(<HomePageNavbarComponent />);
    expect(container.firstChild.classList.contains('navbarContainer')).toBe(true);
    expect(container.firstChild.firstChild.classList.contains('navbarTitle')).toBe(true);
  });
});
