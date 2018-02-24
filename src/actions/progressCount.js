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
