export const setTargetTextSuccess = (targetText = []) => ({
  type: 'SET_TARGET_TEXT_SUCCESS',
  targetText
});

export function setTargetHasErrored(bool) {
  return {
    type: 'SET_TARGET_HAS_ERRORED',
    hasErrored: bool
  };
}

export function setTargetIsLoading(bool) {
  return {
    type: 'SET_TARGET_IS_LOADING',
    isLoading: bool
  };
}
