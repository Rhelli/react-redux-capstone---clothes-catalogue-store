import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import FilterTagsComponent from '../FilterTagsComponent';

const enableSelectedFilter = jest.fn();
const filterTagsComponent = <FilterTagsComponent enableSelectedFilter={enableSelectedFilter} />;

describe('The Appearance and Functionality of the FilterTagsComponent', () => {
  it('Matches the FilterTagsComponent Snapshot', () => {
    const tree = renderer.create(filterTagsComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Contains three main containers for each filter category', () => {
    const { container } = render(filterTagsComponent);
    expect(container.firstChild.childElementCount).toEqual(3);
  });

  it('Contains the correct number of filter tags available in each category', () => {
    const { container } = render(filterTagsComponent);
    expect(container.firstChild.firstChild.lastChild.childElementCount).toEqual(2);
    expect(container.firstChild.firstChild.nextSibling.lastChild.childElementCount).toEqual(5);
    expect(container.firstChild.lastChild.lastChild.childElementCount).toEqual(20);
  });
});
