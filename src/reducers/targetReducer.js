import _ from 'lodash';

export const targetReducer = (state = '', action) => {
  switch(action.type) {
    case 'SET_TARGET_TEXT':
      return {
        textArray: action.targetText,
        textCount: action.targetText.length
      };
    default:
      return state;
  }
};
