const initialState = {
  wordCount: 0,
  charCount: 0,
  errorCharCount: 0,
  timerCount: 0
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

    case 'INCREMENT_TIMER_COUNT': {
      const timerCount = state.timerCount + 1;      
      return {
        ...state,
        timerCount
      };
    }
    
    default:
      return state;
  }
};
