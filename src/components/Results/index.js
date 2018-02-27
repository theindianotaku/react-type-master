import React from 'react';

const Results = ({ results }) => (
  <div className="results-area">
    <p>{`Accuracy: ${((results.successCount / results.totalCount) * 100)}%`}</p>
    {/* <p>{`Words per minute: ${((results.successCount / 5) / results.timeElapsed) * 60}`}</p> */}
  </div>
);

export default Results;