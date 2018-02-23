const initialState = {
  wordCount: 0,
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

    case 'SUCCESS_CHAR_COUNT': {
      const charCount = state.charCount + 1;
      return {
        ...state,
        charCount
      };
    }

    case 'ERROR_CHAR_COUNT': {
      const errorCharCount = state.errorCharCount + 1;
      return {
        ...state,
        errorCharCount
      };
    }

    default:
      return state;
  }
};