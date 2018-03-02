import React from 'react';
import { Link } from 'react-router-dom';

import { calcWPM, calcAccuracy } from '../../utilities';

const Results = ({ results : { successCount, totalCount, timeElapsed } }) => (
  <ul className="target-area__results">
    <li>
      <h4>Accuracy</h4>
      <h2>{`${calcAccuracy(successCount, totalCount)}%`}</h2>
    </li>
    <li>
      <h4>Words per minute</h4>
      <h2>{`${calcWPM(successCount, timeElapsed)}`}</h2>
    </li>
    <li>
      <Link 
        className="ui button small red labeled icon target-area__action" 
        to="/"
      >
        <i className="stop icon"></i>Stop
      </Link>
    </li>
  </ul>
);

export default Results;