import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { startPrep } from '../actions/progressCount';

const LandingPage = (props) => (
  <div>
    <Link 
      className="ui button primary" 
      to="/test"
      onClick={props.startPrep}
    >
      Begin Test
    </Link>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    startPrep: (status) => dispatch(startPrep(status))
  };
};

export default connect(null, mapDispatchToProps)(LandingPage);
