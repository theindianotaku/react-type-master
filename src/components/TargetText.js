import React from 'react';
import connect from 'react-redux';

const TargetText = (props) => {
  return (
    <span>
      {props.textArray ? props.textArray.join(' ') : 'Loading text..'}
    </span>
  );
};

export default TargetText;
