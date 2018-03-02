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
    testStatus === 'YET_TO_START' ? (
      <div>
        <Header />
        <div className="results container">
          <Link 
            className="ui button labeled icon target-area__action" 
            to="/"
            onClick={resetTest}
          >
            <i className="arrow left icon"></i>Return Home
          </Link>
          <ul className="target-area__results">
            <li>
              <h4 >Accuracy</h4>
              <h1>{`${calcAccuracy(successCount, totalCount)}%`}</h1>
            </li>
            <li>
              <h4>Words per minute</h4>
              <h1>{`${calcWPM(successCount, timeElapsed)}`}</h1>
            </li>
          </ul>
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
