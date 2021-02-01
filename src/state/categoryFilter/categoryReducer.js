import FILTER_CATEGORY from './categoryActions';

const initialState = {
  category: 'All',
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CATEGORY:
      if (action.payload === 'All') {
        return {
          ...state,
          category: action.payload,
        };
      }
      return {
        ...state,
        category: action.payload,
      };

    default: return {
      ...state,
      category: '',
    };
  }
};

export default categoryReducer;
