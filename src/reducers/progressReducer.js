const initialState = {
  wordCount: 19,
  charCount: 0,
  errorCharCount: 0
};

export const progressReducer = (state = initialState, action) => {
  switch(action.type) {

    case 'INCREMENT_WORD_COUNT': {
      const wordCount = state.wordCount + 1;
      return {
        ...state,
        wordCount,
        charCount: 0,
        errorCharCount: 0
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
