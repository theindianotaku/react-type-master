import React from 'react';

const Header = () => (
  <nav className="header">
    <div className="header__container container">
      <img alt="logo" className="header__logo" src={require('../../images/logo.svg')} />
      <h2 className="header__title gradient-text">type-master</h2>
      
    </div>
  </nav>
);

export default Header;