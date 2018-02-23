import React from 'react';

const TargetText = (props) => {
  return (
    <span>
      {props.textArray ? props.textArray.join(' ') : 'Loading text..'}
    </span>
  );
};

export default TargetText;
