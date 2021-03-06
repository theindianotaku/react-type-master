export const startPrep = () => {
  return {
    type: 'START_PREP'
  };
};

export const startTest = () => {
  return {
    type: 'START_TEST'
  };
};

export const completeTest = () => {
  return {
    type: 'COMPLETE_TEST'
  };
};

export const setSuccessCharCount = (charCount) => {
  return {
    type: 'SET_SUCCESS_CHAR_COUNT',
    charCount
  };
};

export const setErrorCharCount = (errorCharCount) => {
  return {
    type: 'SET_ERROR_CHAR_COUNT',
    errorCharCount
  };
};

export const incrementWordCount = () => {
  return {
    type: 'INCREMENT_WORD_COUNT'
  };
};

export const incrementTimerCount = () => {
  return {
    type: 'INCREMENT_TIMER_COUNT'
  };
};

export const resetProgress = () => ({
  type: 'RESET_PROGRESS'
});