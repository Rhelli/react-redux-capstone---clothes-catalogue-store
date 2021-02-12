import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import SmallPrintComponent from '../SmallPrintComponent';

describe('The appearance of the SmallPrintComponent footer', () => {
  it('Matches the SmallPrintComponent snapshot', () => {
    const SmallPrintSnapshot = renderer.create(<SmallPrintComponent />).toJSON();
    expect(SmallPrintSnapshot).toMatchSnapshot();
  });

  it('Contains two children in its entirety', () => {
    const { container } = render(<SmallPrintComponent />);
    expect(container.firstChild.childElementCount).toEqual(2);
  });

  it('Has two children, both paragraphs', () => {
    const { container } = render(<SmallPrintComponent />);
    expect(container.firstChild.firstChild.nodeName).toBe('P');
    expect(container.firstChild.lastChild.nodeName).toBe('P');
  });

  it('Contains a disclaimer in the first paragraph element', () => {
    const { getByText } = render(<SmallPrintComponent />);
    getByText('All images are property of ASOS.com. This site is not intended for any commercial purpose.');
  });

  it('Contains the website author and attributes as the second element', () => {
    const { getByText } = render(<SmallPrintComponent />);
    getByText('Made with love, hard work, sweat and tears. Rory Hellier 2021©');
  });
});
