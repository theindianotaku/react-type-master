import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div>
    <Link className="ui button primary" to="/test">Re-take test</Link>
    <Link className="ui button secondary" to="/">Return Home</Link>
  </div>
);

export default LandingPage;
