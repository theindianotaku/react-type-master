export const incrementSuccessCount = () => ({
  type: 'INCREMENT_SUCCESS_COUNT'
});

export const incrementTotalCount = () => ({
  type: 'INCREMENT_TOTAL_COUNT'
});

export const setTimeElapsed = (timeElapsed) => ({
  type: 'SET_TIME_ELAPSED',
  timeElapsed
});