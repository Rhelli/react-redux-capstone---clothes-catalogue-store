const getColorPreview = color => {
  switch (color) {
    case 'black': return {
      backgroundColor: '#101010',
      color: '#C3C3C3',
      borderBottom: '2px solid #202020',
    };
    case 'darkestSpruce': return {
      backgroundColor: '#0E6251',
      color: '#A5C4BE',
      borderBottom: '2px solid #0C5647',
    };
    case 'blue': return {
      backgroundColor: '#3498DB',
      color: '#CCE5F6',
      borderBottom: '2px solid #2E85C0',
    };
    case 'blueDenim': return {
      backgroundColor: '#546E7A',
      color: '#D4DBDE',
      borderBottom: '2px solid #4A606B',
    };
    case 'navy': return {
      backgroundColor: '#2C3E50',
      color: '#CACFD3',
      borderBottom: '2px solid #212F3C',
    };
    case 'green': return {
      backgroundColor: '#229954',
      color: '#C8E6D4',
      borderBottom: '2px solid #1A733F',
    };
    case 'white': return {
      backgroundColor: '#ffffff',
      color: '#303030',
      borderBottom: '2px solid #DFDFDF',
    };
    case 'grape': return {
      backgroundColor: '#884EA0',
      color: '#E1D3E7',
      borderBottom: '2px solid #663B78',
    };
    case 'khaki': return {
      backgroundColor: '#AED581',
      color: '#6D8551',
      borderBottom: '2px solid #83A061',
    };
    case 'grey': return {
      backgroundColor: '#BFC9CA',
      color: '#777E7E',
      borderBottom: '2px solid #8F9798',
    };
    case 'vintageIndigo': return {
      backgroundColor: '#7986CB',
      color: '#DDE1F2',
      borderBottom: '2px solid #5B6598',
    };
    case 'mineralBlue': return {
      backgroundColor: '#80DEEA',
      color: '#406F75',
      borderBottom: '2px solid #60A6AF',
    };
    case 'charcoal': return {
      backgroundColor: '#424242',
      color: '#D0D0D0',
      borderBottom: '2px solid #292929',
    };
    case 'tan': return {
      backgroundColor: '#CA6F1E',
      color: '#F2DBC7',
      borderBottom: '2px solid #985316',
    };
    case 'dustyBlue': return {
      backgroundColor: '#AED6F1',
      color: '#6D8697',
      borderBottom: '2px solid #83A1B5',
    };
    case 'midwash': return {
      backgroundColor: '#7FB3D5',
      color: '#DFECF5',
      borderBottom: '2px solid #5F86A0',
    };
    case 'red': return {
      backgroundColor: '#E53935',
      color: '#F8CECC',
      borderBottom: '2px solid #AC2B28',
    };
    case 'rose': return {
      backgroundColor: '#EB9696',
      color: '#FAE5E5',
      borderBottom: '2px solid #B07171',
    };
    case 'lilac': return {
      backgroundColor: '#E1BEE7',
      color: '#F7EFF9',
      borderBottom: '2px solid #A98FAD',
    };
    case 'multi': return {
      backgroundImage: 'linear-gradient(to right, #64b5f6 0%, #4dd0e1 20%, #81c784 40%, #dce775 60%, #ffb74d 80%, #ba68c 100%)',
      borderTop: '2px solid #E1C3D3',
      borderRight: '2px solid #ba68c8',
      borderBottom: '2px solid #81c784',
      borderLeft: '2px solid #64b5f6',
    };
    default: return {
      backgroundColor: '#00FF33',
    };
  }
};

export default getColorPreview;
