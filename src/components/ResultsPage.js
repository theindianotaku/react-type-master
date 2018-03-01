import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { calcWPM, calcAccuracy } from '../utilities';
import { resetProgress } from '../actions/progressCount';
import Header from './Common/Header';
import { resetResults } from '../actions/results';

const ResultsPage = ({ 
  results : { successCount, totalCount, timeElapsed },
  testStatus,
  resetProgress,
  resetResults
}) => {
  const resetTest = () => {
    resetResults();
    resetProgress();
  };

  return (
    testStatus === 'COMPLETED' ? (
      <div>
        <Header />
        <div className="container">
          <Link 
            className="ui button secondary" 
            to="/"
            onClick={resetTest}
          >Return Home</Link>
          <p>{`Accuracy: ${calcAccuracy(successCount, totalCount)}%`}</p>
          <p>{`Words per minute: ${calcWPM(successCount, timeElapsed)}`}</p>
        </div>
      </div>
    ) : (
      <Redirect to='/' />
    )
  );
};

const mapStateToProps = (state) => {
  return {
    results : state.results,
    testStatus: state.progress.testStatus
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetProgress: () => dispatch(resetProgress()),
    resetResults: () => dispatch(resetResults())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);
