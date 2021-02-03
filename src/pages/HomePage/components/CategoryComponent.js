import PropTypes from 'prop-types';

const CategoryFilterComponent = ({ filterCategory }) => {
  const clothesCategories = ['All', 'Jackets', 'Jeans', 'Shirts', 'Tops', 'Dresses'];
  const genderCategories = ['All', 'Male', 'Female'];
  const colorCategories = [
    'All',
    'Black',
    'Darkest Spruce',
    'Multi',
    'Blue',
    'Blue Denim',
    'Navy',
    'Green',
    'White',
    'Grape',
    'Khaki',
    'Grey',
    'Vintage Indigo',
    'Mineral Blue',
    'Charcoal',
    'Tan',
    'Dusty Blue',
    'Midwash',
    'Red',
    'Rose',
    'Lilac',
  ];
  const priceCategories = ['All', 'Under £20', 'Under £30', 'Under £50', 'Under £100', 'Over £100'];

  return (
    <div>
      <div>
        <label htmlFor="genderCategory">
          Gender
          <select
            onChange={filterCategory}
            name="genderCategory"
            id="genderCategory"
          >
            {genderCategories.map(g => (
              <option key={g}>{g}</option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="clothesType">
          Clothing
          <select
            onChange={filterCategory}
            name="clothesType"
            id="clothesType"
          >
            {clothesCategories.map(type => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="colorCategory">
          Color
          <select
            onChange={filterCategory}
            name="colorCategory"
            id="colorCategory"
          >
            {colorCategories.map(color => (
              <option key={color}>{color}</option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="priceCategories">
          Price
          <select
            onChange={filterCategory}
            name="priceCategories"
            id="priceCategories"
          >
            {priceCategories.map(price => (
              <option key={price}>{price}</option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};

CategoryFilterComponent.propTypes = {
  filterCategory: PropTypes.func.isRequired,
};

export default CategoryFilterComponent;
