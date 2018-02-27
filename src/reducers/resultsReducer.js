const initialState = {
  successCount: 0,
  totalCount: 0,
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

    case 'INCREMENT_TOTAL_COUNT': {
      const totalCount = state.totalCount + 1;
      return {
        ...state,
        totalCount
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
