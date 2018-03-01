import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="header">
    <div className="header__container container">
      <img alt="logo" className="header__logo" src={require('../../images/logo.svg')} />
      <h2 className="header__title gradient-text">type-master</h2>
      <Link 
        className="ui button small negative labeled icon header__action" 
        to="/"
      >
        <i className="stop icon"></i>Stop
      </Link>
    </div>
  </nav>
);

export default Header;