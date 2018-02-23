const initialState = {
  wordCount: 2,
  charCount: 0,
  errorCharCount: 0
};

export const progressReducer = (state = initialState, action) => {
  switch(action.type) {

    case 'SUCCESS_WORD_COUNT': {
      const wordCount = state.wordCount + 1;
      return {
        ...state,
        wordCount
      };
    }

    case 'SET_SUCCESS_CHAR_COUNT': {
      return {
        ...state,
        charCount: action.charCount
      };
    }

    case 'SET_ERROR_CHAR_COUNT': {
      return {
        ...state,
        errorCharCount: action.errorCharCount
      };
    }

    default:
      return state;
  }
};
