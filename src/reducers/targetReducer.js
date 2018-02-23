export const targetReducer = (state = '', action) => {
  switch(action.type) {
    case 'SET_TARGET_TEXT_SUCCESS':
      return {
        ...state,
        textArray: action.targetText,
        textCount: action.targetText.length
      };

    case 'SET_TARGET_HAS_ERRORED':
      return {
        ...state,
        hasErrored: action.hasErrored
      };

    case 'SET_TARGET_IS_LOADING':
      return {
        ...state,        
        isLoading: action.isLoading
      };

    default:
      return state;
  }
};
