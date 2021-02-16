import filterCategory from '../categoryActions';
import '@testing-library/jest-dom/extend-expect';

describe('The Filter Category action', () => {
  it('Returns an action/object when passed name and filter parameters', () => {
    const filterAction = filterCategory('jeans', 'clothesFilter');
    expect(filterAction.type).toBe('FILTER_CATEGORY');
    expect(filterAction.name).toBe('jeans');
    expect(filterAction.filter).toBe('clothesFilter');
  });
});
