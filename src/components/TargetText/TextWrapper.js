import React from 'react';

const TextWrapper = ({progress : {charCount, errorCharCount, wordCount}, textArray}) => {
  const doneTextArray = textArray.slice(0, wordCount);
  const doingTextArray = textArray.slice(wordCount);

  const doingText = doingTextArray.join(' ');

  const doingSuccess = doingText.slice(0, charCount);
  const doingError = doingText.slice(charCount, charCount + errorCharCount);
  const toDoChar = doingText[charCount + errorCharCount];
  const rest = doingText.slice(charCount + errorCharCount + 1);

  return (
    <p>
      <span className='target__success'>{`${doneTextArray.join(' ')} `}</span>
      <span className='target__success'>{doingSuccess}</span>
      <span className='target__error'>{doingError}</span>
      <span className='target__indeterminate'>{toDoChar}</span>
      <span className='text-blue-grey'>{rest}</span>
    </p>
  );
};

export default TextWrapper;
