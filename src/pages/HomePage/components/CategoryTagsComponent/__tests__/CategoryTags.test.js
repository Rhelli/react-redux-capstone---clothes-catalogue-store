import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import CategoryTagsComponent from '../CategoryTagsComponent';

const categoryData = {
  clothesFilter: {
    jacket: true,
    jeans: false,
    shirts: true,
    tops: false,
    dresses: true,
  },
  genderFilter: {
    male: false,
    female: true,
  },
  colorFilter: {
    black: false,
    darkestSpruce: true,
    multi: false,
    blue: true,
    blueDenim: false,
    navy: true,
    green: false,
    white: true,
    grape: false,
    khaki: true,
    grey: false,
    vintageIndigo: true,
    mineralBlue: false,
    charcoal: true,
    tan: false,
    dustyBlue: true,
    midwash: false,
    red: true,
    rose: false,
    lilac: true,
  },
};

const enableSelectedFilter = jest.fn();

const categoryTagsComponent = <CategoryTagsComponent categoryData={categoryData} enableSelectedFilter={enableSelectedFilter} />

describe('The CategoryTagsComponent', () => {
  it('Matches the CategoryTagsComponent snapshot', () => {
    const tree = renderer.create(categoryTagsComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Is comprised of one master container component with the correct className and tag attributes', () => {
    const { container } = render(categoryTagsComponent);
    expect(container.firstChild.nodeName).toBe('DIV');
    expect(container.firstChild.classList.contains('categoryTagsContainer')).toBe(true);
  });

  it('Should contain 14 active tags with the provided categoryData preset above', () => {
    const { container } = render(categoryTagsComponent);
    expect(container.firstChild.childElementCount).toEqual(14);
  });

  it('Should render tags with the correct html attributes', () => {
    const { container } = render(categoryTagsComponent);
    expect(container.firstChild.firstChild).toHaveAttribute('data-name', 'female');
    expect(container.firstChild.firstChild.classList.contains('female')).toBe(true);
  });
});
