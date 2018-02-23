const initialState = {
  count: 0,
  errorCount: 0
};

export const progressReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SUCCESS_COUNT': {
      const count = state.count + 1;

      return {
        ...state,
        count
      };
    }
    case 'ERROR_COUNT': {
      const errorCount = state.errorCount + 1;

      return {
        ...state,
        errorCount
      };
    }
    default:
      return state;
  }
};
