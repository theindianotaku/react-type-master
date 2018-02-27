import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { startTest } from '../actions/progressCount';

const LandingPage = (props) => (
  <div>
    <Link 
      className="ui button primary" 
      to="/test"
      onClick={props.startTest}
    >
      Begin Test
    </Link>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    startTest: (status) => dispatch(startTest(status))
  };
};

export default connect(null, mapDispatchToProps)(LandingPage);
