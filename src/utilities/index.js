import _ from 'lodash';

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
