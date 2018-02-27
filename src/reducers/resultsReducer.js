const initialState = {
  successCount: 0,
  totalCount: 0,
  timeElapsed: 0
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

    case 'SET_TIME_ELAPSED': {
      return {
        ...state,
        timeElapsed: action.timeElapsed
      };
    }

    default:
      return state;
  }
};
