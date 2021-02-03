import PropTypes from 'prop-types';

const CategoryFilterComponent = ({
  filterCategory, clothesCategory, genderCategory, colorCategory, priceCategory
}) => {
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
  const priceCategories = ['All', 'High to Low', 'Low to High'];

  return (
    <div>
      {() => {
        if (priceFilter.highToLow) {
          return (
            <div
              data-name="highToLow"
              onClick={event => enablePriceFilter(event, 'highToLow')}
            >
              <h6 data-name="highToLow">Price ↓</h6>
            </div>
          )
        }
        return (
          null
        );
      }}
      {() => {
        if (priceFilter.lowToHigh) {
          return (
            <div
              data-name="lowToHigh"
              onClick={event => enablePriceFilter(event, 'lowToHigh')}
            >
              <h6 data-name="lowToHigh">Price ↑</h6>
            </div>
          )
        }
        return (
          null
        );
      }}
      {() => {
        if (genderFilter.male) {
          return (
            <div
              data-name="male"
              onClick={event => enableSelectedFilter(event, 'male')}
            >
              <h6 data-name="male">Mens</h6>
            </div>
          )
        }
        return (
          null
        );
      }}
      {() => {
        if (genderFilter.female) {
          return (
            <div
              data-name="female"
              onClick={event => enableSelectedFilter(event, 'female')}
            >
              <h6 data-name="female">Womens</h6>
            </div>
          )
        }
        return (
          null
        );
      }}
      {() => {
        if (clothesFilter.jackets) {
          return (
            <div
              data-name="jackets"
              onClick={event => enableSelectedFilter(event, 'jackets')}
            >
              <h6 data-name="jackets">Coats & Jackets</h6>
            </div>
          )
        }
        return (
          null
        );
      }}
      {() => {
        if (clothesFilter.jeans) {
          return (
            <div
              data-name="jeans"
              onClick={event => enableSelectedFilter(event, 'jeans')}
            >
              <h6 data-name="jeans">Jeans</h6>
            </div>
          )
        }
        return (
          null
        );
      }}
      {() => {
        if (clothesFilter.shirts) {
          return (
            <div
              data-name="shirts"
              onClick={event => enableSelectedFilter(event, 'shirts')}
            >
              <h6 data-name="shirts">Shirts</h6>
            </div>
          )
        }
        return (
          null
        );
      }}
      {() => {
        if (clothesFilter.tops) {
          return (
            <div
              data-name="tops"
              onClick={event => enableSelectedFilter(event, 'tops')}
            >
              <h6 data-name="tops">Tops</h6>
            </div>
          )
        }
        return (
          null
        );
      }}
      {() => {
        if (clothesFilter.dresses) {
          return (
            <div
              data-name="dresses"
              onClick={event => enableSelectedFilter(event, 'dresses')}
            >
              <h6 data-name="dresses">Dresses</h6>
            </div>
          )
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.black) {
          return (
            <div
              data-name="black"
              onClick={event => enabledSelectedFilter(event, 'black')}
            >
              <h6 data-name="black">Black</h6>
            </div>
          )
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.darkestSpruce) {
          return (
            <div
              data-name="darkestSpruce"
              onClick={event => enableSelectedFilter(event, 'darkestSpruce')}
            >
              <h6 data-name="darkestSpruce">Darkest Spruce</h6>
            </div>
          )
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.multi) {
          return (
            <div
              data-name="multi"
              onClick={event => enableSelectedFilter(event, 'multi')}
            >
              <h6 data-name="multi">Multi</h6>
            </div>
          )
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.blue) {
          return (
            <div
              data-name="blue"
              onClick={event => enableSelectedFilter(event, 'blue')}
            >
              <h6 data-name="blue">Blue</h6>
            </div>
          )
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.blueDenim) {
          return (
            <div
              data-name="blueDenim"
              onClick={event => enableSelectedFilter(event, 'blueDenim')}
            >
              <h6 data-name="blueDenim">Blue Denim</h6>
            </div>
          )
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.navy) {
          return (
            <div
              data-name="navy"
              onClick={event => enableSelectedFilter(event, 'navy')}
            >
              <h6 data-name="navy">Navy</h6>
            </div>
          )
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.green) {
          return (
            <div
              data-name="green"
              onClick={event => enableSelectedFilter(event, 'green')}
            >
              <h6 data-name="green">Green</h6>
            </div>
          )
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.white) {
          return (
            <div
              data-name="white"
              onClick={event => enableSelectedFilter(event, 'white')}
            >
              <h6 data-name="white">White</h6>
            </div>
          )
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.grape) {
          return (
            <div
              data-name="grape"
              onClick={event => enableSelectedFilter(event, 'grape')}
            >
              <h6 data-name="grape">Grape</h6>
            </div>
          )
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.khaki) {
          return (
            <div
              data-name="khaki"
              onClick={event => enableSelectedFilter(event, 'khaki')}
            >
              <h6 data-name="khaki">Khaki</h6>
            </div>
          )
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.grey) {
          return (
            <div
              data-name="grey"
              onClick={event => enableSelectedFilter(event, 'grey')}
            >
              <h6 data-name="grey">Grey</h6>
            </div>
          )
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.vintageIndigo) {
          return (
            <div
              data-name=""
              onClick={event => enableSelectedFilter(event, 'vintageIndigo')}
            >
              <h6 data-name="">Vintage Indigo</h6>
            </div>
          )
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.mineralBlue) {
          return (
            <div
              data-name="mineralBlue"
              onClick={event => enableSelectedFilter(event, 'mineralBlue')}
            >
              <h6 data-name="mineralBlue">Mineral Blue</h6>
            </div>
          )
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.charcoal) {
          return (
            <div
              data-name="charcoal"
              onClick={event => enableSelectedFilter(event, 'charcoal')}
            >
              <h6 data-name="charcoal">Charcoal</h6>
            </div>
          )
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.tan) {
          return (
            <div
              data-name="tan"
              onClick={event => enableSelectedFilter(event, 'tan')}
            >
              <h6 data-name="tan">Tan</h6>
            </div>
          )
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.dustyBlue) {
          return (
            <div
              data-name="dustyBlue"
              onClick={event => enableSelectedFilter(event, 'dustyBlue')}
            >
              <h6 data-name="dustyBlue">Dusty Blue</h6>
            </div>
          )
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.midwash) {
          return (
            <div
              data-name="midwash"
              onClick={event => enableSelectedFilter(event, 'midwash')}
            >
              <h6 data-name="midwash">Midwash</h6>
            </div>
          )
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.red) {
          return (
            <div
              data-name="red"
              onClick={event => enableSelectedFilter(event, 'red')}
            >
              <h6 data-name="red">Red</h6>
            </div>
          )
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.rose) {
          return (
            <div
              data-name="rose"
              onClick={event => enableSelectedFilter(event, 'rose')}
            >
              <h6 data-name="rose">Rose</h6>
            </div>
          )
        }
        return (
          null
        );
      }}
      {() => {
        if (colorFilter.lilac) {
          return (
            <div
              data-name="lilac"
              onClick={event => enableSelectedFilter(event, 'lilac')}
            >
              <h6 data-name="lilac">Lilac</h6>
            </div>
          )
        }
        return (
          null
        );
      }}
    </div>
  );
};

CategoryFilterComponent.propTypes = {
  filterCategory: PropTypes.func.isRequired,
};

export default CategoryFilterComponent;
