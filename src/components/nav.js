import { Link } from 'gatsby';
import React from 'react';

import '../styles/nav.css';

const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent ? { 'aria-current': 'page' } : null;
};

const Nav = () => (
  <nav className="c-navigation" aria-label="main navigation" role="navigation">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/services" getProps={isPartiallyActive}>
          Services
        </Link>
      </li>
      <li>
        <Link to="/performance" getProps={isPartiallyActive}>
          Performance
        </Link>
      </li>
      <li>
        <Link to="/accessibility" getProps={isPartiallyActive}>
          Accessibility
        </Link>
      </li>
      <li>
        <Link to="/resources" getProps={isPartiallyActive}>
          Resources
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
