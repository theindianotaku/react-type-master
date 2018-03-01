import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Header, Icon } from 'semantic-ui-react';

import { startPrep } from '../actions/progressCount';

const LandingPage = (props) => (
  <main className='main-container'>
    <header className='landing__header m-b-l'>
      <Header as='h1' className='gradient-text'>type-master</Header>
      <p>A simple app to test your typing speed.</p>
    </header>
    <section className='landing__actions'>
      <Link 
        className="landing__start-button ui button accent-bg-image" 
        to="/test"
        onClick={props.startPrep}
      >
        Begin Test
      </Link>
    </section>
    <footer className="landing__footer">
      <ul className="icons">
        <li><a href="https://github.com/theindianotaku" rel='noreferrer noopener' target="_blank"><Icon link size='large' name='github' /></a></li>
        <li><a href="https://www.linkedin.com/in/debashishnayak/" rel='noreferrer noopener' target="_blank"><Icon link size='large' name='linkedin in' /></a></li>
        <li><a href="https://www.instagram.com/debashish.nayak/" rel='noreferrer noopener' target="_blank"><Icon link size='large' name='instagram' /></a></li>
        <li><a href="mailto:debashishzero@gmail.com" rel='noreferrer noopener' target="_blank"><Icon link size='large' name='mail' /></a></li>
      </ul>
      <ul className="copyright">
        <li>2018 © Debashish Nayak </li>
      </ul>
    </footer>
  </main>
);

const mapDispatchToProps = (dispatch) => {
  return {
    startPrep: (status) => dispatch(startPrep(status))
  };
};

export default connect(null, mapDispatchToProps)(LandingPage);
