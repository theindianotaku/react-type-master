import _ from 'lodash';

const roundToOneDecimal = (number) => {
  return Number(Math.round(number + 'e1') + 'e-1');
};

const roundToWholeNumber = (number) => {
  return Number((number).toFixed(0));
};

export const trimStringOfPtags = (target) => {
  const trimPtags = target.replace(/(<p[^>]+?>|<p>|<\/p>)/img, ' ');
  const trimSpaces = _.trim(trimPtags);
  const toArray = _.split(trimSpaces, ' ').filter((n) => {
    return n !== '\r';
  });

  return toArray;
};

export const checkIfValidInput = (key) => {
  const invalidInputs = [
    'Alt',
    'Shift',
    'Tab',
    'CapsLock',
    'Control',
    'Backspace', 'Delete',
    'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown',
  ];

  return _.findIndex(invalidInputs, (item) => (item === key)) === -1 ? true : false;
};

export const calcWPM = (successCount, timeElapsed) => {
  if (timeElapsed) {
    return roundToWholeNumber(((successCount / 5) / timeElapsed) * 60);
  } else {
    return 0;
  }
};

export const calcAccuracy = (successCount, totalCount) => {
  if (totalCount) {
    return roundToOneDecimal((successCount / totalCount) * 100);
  } else {
    return 0;
  }
};