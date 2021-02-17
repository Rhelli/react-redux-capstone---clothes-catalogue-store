import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import ProductInfoComponent from '../ProductInfoComponent';

const id = 121111;
const gender = 'male';
const brandName = 'ASOS';
const productName = 'Batman Cape';
const type = 'Cape';
const price = '99';
const color = 'Black';
const colorTool = 'black';
const productDetails = [
  'Makes you the night',
  'Mysterious',
  'Rich and Compelling',
];
const productDesc = 'Something something Dark Knight';
const madeOf = 'Mournful tears';

const productInfoComponent = (
  <ProductInfoComponent
    id={id}
    gender={gender}
    brandName={brandName}
    productName={productName}
    type={type}
    price={price}
    color={color}
    colorTool={colorTool}
    productDetails={productDetails}
    productDesc={productDesc}
    madeOf={madeOf}
  />
);

describe('The appearance and the functionality of the ProductInfoComponent', () => {
  it('Matches the ProductInfoComponent snapshot', () => {
    const tree = renderer.create(productInfoComponent);
    expect(tree).toMatchSnapshot();
  });

  it('Contains a master container with the correct attributes', () => {
    const { container } = render(productInfoComponent);
    expect(container.firstChild.nodeName).toBe('DIV');
    expect(container.firstChild.classList.contains('productInfoContainer')).toBe(true);
  });

  it('Contains seven sub-containers, each for the important clothing information', () => {
    const { container } = render(productInfoComponent);
    expect(container.firstChild.childElementCount).toEqual(7);
  });

  it('Contains a container for the product site map', () => {
    const { container, getByText } = render(productInfoComponent);
    const infoSiteMap = container.firstChild.firstChild;
    expect(infoSiteMap.firstChild.nodeName).toBe('SPAN');
    getByText('Mens');
    getByText('Cape');
  });

  it('Contains a container for the product name and brand', () => {
    const { container, getByText } = render(productInfoComponent);
    const nameBrand = container.firstChild.firstChild.nextSibling;
    expect(nameBrand.firstChild.nodeName).toBe('H2');
    getByText('Batman Cape');
    expect(nameBrand.lastChild.nodeName).toBe('H3');
    getByText('ASOS');
  });

  it('Contains a container for displaying the color and size selection', () => {
    const { getByText, container } = render(productInfoComponent);
    const colorSize = container.firstChild.firstChild.nextSibling.nextSibling;
    expect(colorSize.firstChild.classList.contains('productInfoColorPreview')).toBe(true);
    expect(colorSize.lastChild.classList.contains('productInfoSizeSelect')).toBe(true);
    getByText('Black');
    expect(colorSize.lastChild.childElementCount).toEqual(3);
    getByText('S');
    getByText('M');
    getByText('L');
  });

  it('Contains the container for displaying the like and buy button', () => {
    const { getByText, container } = render(productInfoComponent);
    const likeBuy = container.firstChild.firstChild.nextSibling.nextSibling.nextSibling;
    expect(likeBuy.childElementCount).toBe(2);
    expect(likeBuy.firstChild.classList.contains('infoLikeButton')).toBe(true);
    expect(likeBuy.firstChild.nodeName).toBe('BUTTON');
    expect(likeBuy.lastChild.classList.contains('productInfoBuyButton')).toBe(true);
    expect(likeBuy.lastChild.nodeName).toBe('DIV');
    expect(likeBuy.lastChild.firstChild.nodeName).toBe('BUTTON');
    getByText('£99');
  });

  it('Contains the container for displaying the product description', () => {
    const { container, getByText } = render(productInfoComponent);
    const productDesc = container.firstChild.lastChild.previousSibling.previousSibling;
    expect(productDesc.firstChild.nodeName).toBe('P');
    getByText('Something something Dark Knight');
  });

  it('Contains the container for mapping a list of all the product details', () => {
    const { container, getByText } = render(productInfoComponent);
    const productDetails = container.firstChild.lastChild.previousSibling;
    expect(productDetails.firstChild.nodeName).toBe('UL');
    expect(productDetails.firstChild.childElementCount).toBe(3);
    getByText('Makes you the night');
    getByText('Mysterious');
    getByText('Rich and Compelling');
  });

  it('Contains a container for displaying the madeOf info and the id number', () => {
    const { container, getByText } = render(productInfoComponent);
    const productExtraInfo = container.firstChild.lastChild;
    expect(productExtraInfo.childElementCount).toBe(2);
    expect(productExtraInfo.firstChild.classList.contains('madeOf')).toBe(true);
    getByText('Mournful tears');
    expect(productExtraInfo.lastChild.classList.contains('productID')).toBe(true);
    getByText('ID: 121111');
  });
});
