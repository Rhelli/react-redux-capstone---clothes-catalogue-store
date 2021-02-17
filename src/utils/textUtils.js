export const genderParse = gender => {
  if (gender === 'male') {
    return 'Mens';
  }
  return 'Womens';
};

export const caseParse = word => {
  if (word === 'jacket') {
    return 'Coats & Jackets';
  }
  const a = word.split('');
  a[0] = a[0].toUpperCase();
  return a.join('');
};
