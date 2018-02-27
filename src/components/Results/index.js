import React from 'react';

import { calcWPM, calcAccuracy } from '../../utilities';

const Results = ({ results : { successCount, totalCount, timeElapsed } }) => (
  <div className="results-area">
    <p>{`Accuracy: ${calcAccuracy(successCount, totalCount)}%`}</p>
    <p>{`Words per minute: ${calcWPM(successCount, timeElapsed)}`}</p>
  </div>
);

export default Results;