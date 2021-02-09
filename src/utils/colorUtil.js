const getColorPreview = color => {
  switch (color) {
    case 'black': return {
      backgroundColor: '#00000',
    };
    case 'darkestSpruce': return {
      backgroundColor: '#0E6251',
    };
    case 'multi': return {
      backgroundImage:
      `linear - gradient(
        to right,
          #64B5F6,
          #4DD0E1 20 %,
          #81C784 40 %,
          #DCE775 60 %,
          #FFB74D 80 %,
          #BA68C8
      );`
    }
    case 'blue': return {
      backgroundColor: '#3498DB',
    };
    case 'blueDenim': return {
      backgroundColor: '#2E4053',
    };
    case 'navy': return {
      backgroundColor: '#2C3E50',
    };
    case 'green': return {
      backgroundColor: '#229954',
    };
    case 'white': return {
      backgroundColor: '#ffffff',
    };
    case 'grape': return {
      backgroundColor: '#884EA0',
    };
    case 'khaki': return {
      backgroundColor: '#AED581',
    };
    case 'grey': return {
      backgroundColor: '#BFC9CA',
    };
    case 'vintageIndigo': return {
      backgroundColor: '#7986CB',
    };
    case 'mineralBlue': return {
      backgroundColor: '#80DEEA',
    };
    case 'charcoal': return {
      backgroundColor: '#424242',
    };
    case 'tan': return {
      backgroundColor: '#CA6F1E',
    };
    case 'dustyBlue': return {
      backgroundColor: '#AED6F1',
    };
    case 'midwash': return {
      backgroundColor: '#7FB3D5',
    };
    case 'red': return {
      backgroundColor: '#E74C3C',
    };
    case 'rose': return {
      backgroundColor: '#E57373',
    };
    case 'lilac': return {
      backgroundColor: '#E1BEE7',
    };
    default: return {
      backgroundColor: '#00FF33',
    };
  }
};

export default getColorPreview;
