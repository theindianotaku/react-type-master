import React from 'react';

const Header = () => (
  <nav id="header" className="ui inverted top fixed menu">
    <div className="ui container">
      <a className="header item m-r-md">
        <img alt="logo" className="ui mini image m-r-md App-logo" src={require('../../images/logo.svg')} />
        Type Master
      </a>
    </div>
  </nav>
);

export default Header;