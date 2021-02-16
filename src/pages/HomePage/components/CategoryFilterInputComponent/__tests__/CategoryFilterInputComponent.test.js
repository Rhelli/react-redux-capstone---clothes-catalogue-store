import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import CategoryFilterInputComponent from '../CategoryFilterInputComponent';

const enableSelectedFilter = jest.fn();
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

const categoryFilterInputComponent = (
  <CategoryFilterInputComponent
    categoryData={categoryData}
    enableSelectedFilter={enableSelectedFilter}
  />
);

describe('The appearance and functionality of the CategoryFilterInputComponent', () => {
  it('Matches the CategoryFilterInputComponents snapshot', () => {
    const tree = renderer.create(categoryFilterInputComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Contains a master container', () => {
    const { container } = render(categoryFilterInputComponent);
    expect(container.firstChild.nodeName).toBe('DIV');
    expect(container.firstChild.classList.contains('filterInputContainer')).toBe(true);
  });

  it('Contains the filter title and the FontAwesome Icon', () => {
    const { container, getByText } = render(categoryFilterInputComponent);
    expect(container.firstChild.firstChild.nodeName).toBe('H3');
    getByText('Filters');
  });

  it('Contains a hidden dropdown menu upon startup', () => {
    const { container } = render(categoryFilterInputComponent);
    expect(container.firstChild.lastChild.visibility).toBeFalsy();
  });
});
