const initialState = {
  totalCount: 0,
  successCount: 0,
  errorCount: 0,
  wpmArray: [],
  timeTaken: 0
};

export const resultsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT_SUCCESS_COUNT': {
      const successCount = state.successCount + 1;
      return {
        ...state,
        successCount
      };
    }

    case 'INCREMENT_ERROR_COUNT': {
      const errorCount = state.errorCount + 1;
      return {
        ...state,
        errorCount
      };
    }

    case 'SET_TIME_TAKEN': {
      return {
        ...state,
        timeTaken: action.timeTaken
      };
    }

    default:
      return state;
  }
};
