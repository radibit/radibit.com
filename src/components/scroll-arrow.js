import React from 'react';

const ScrollLogo = () => (
  <div>
    <p
      style={{
        textTransform: 'uppercase',
        fontWeight: '600',
        width: '4em',
        margin: 0,
        transform: 'rotate(-90deg)',
        transformOrigin: '0 0',
      }}
    >
      Scroll
    </p>
    <svg
      width="28"
      height="62"
      viewBox="0 0 28 62"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
    >
      <g fill="#ff6153">
        <path d="M12.476.737h3V60h-3z" />
        <path
          d="M13.976 62l13.738-13.336-1.752-1.679-11.986 11.66-12.01-11.683-1.818 1.701L13.976 62z"
          fillRule="nonzero"
        />
      </g>
    </svg>
  </div>
);

export default ScrollLogo;
