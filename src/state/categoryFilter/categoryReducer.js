import FILTER_CATEGORY from './categoryActions';

const initialState = {
  category: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CATEGORY:
      if (action.payload === 'All') {
        return {
          ...state,
          category: '',
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
