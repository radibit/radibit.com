import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <nav className="c-navigation o-container" role="navigation">
    <Link className="o-logo" to="/">
      {siteTitle}
    </Link>

    <ul className="c-navigation__menu u-marginLeftAuto">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/performance">Performance</Link>
      </li>
      <li>
        <Link to="/accessibility">Accessibility</Link>
      </li>
      <li>
        <Link to="/resources">Resources</Link>
      </li>
    </ul>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
