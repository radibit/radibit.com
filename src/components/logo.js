import { Link } from 'gatsby';
import React from 'react';

import '../styles/logo.css';

const Logo = () => (
  <Link className="c-logo" to="/" aria-label="radibit logo">
    <svg
      viewBox="0 0 427 426"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
    >
      <path
        d="M.964 122.489v-.563L123.705.364v122.125V.364h302.532v303.147h-.3L303.496 425.636H.964V122.489z"
        fill="#fff"
      />
      <g
        fontFamily="'Futura-Medium','Futura',sans-serif"
        fontWeight="500"
        fontSize="110.64"
      >
        <text x="71.6" y="250.816">
          r
          <tspan x="112.225px 178.566px" y="250.816px 250.816px">
            ad
          </tspan>
          i
        </text>
        <text x="151.419" y="375.287">
          bit
        </text>
      </g>
    </svg>
  </Link>
);

export default Logo;
