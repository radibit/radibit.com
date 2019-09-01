import React from 'react';
import Nav from './nav';
import Logo from './logo';

import '../styles/header.css';

const Header = () => (
  <header className="c-header" role="banner">
    <Logo />
    <Nav />
  </header>
);

export default Header;
