import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { calcWPM, calcAccuracy } from '../utilities';
import { resetProgress } from '../actions/progressCount';
import { resetResults } from '../actions/results';

const ResultsPage = ({ 
  results : { successCount, totalCount, timeElapsed },
  resetProgress,
  resetResults
}) => {
  const resetTest = () => {
    resetResults();
    resetProgress();
  };

  return (
    <div>
      <Link 
        className="ui button secondary" 
        to="/"
        onClick={resetTest}
      >Return Home</Link>
      <p>{`Accuracy: ${calcAccuracy(successCount, totalCount)}%`}</p>
      <p>{`Words per minute: ${calcWPM(successCount, timeElapsed)}`}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    results : state.results
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetProgress: () => dispatch(resetProgress()),
    resetResults: () => dispatch(resetResults())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);
