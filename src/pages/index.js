import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

import '../styles/objects.css';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`web performance`, `accessibility`, `consultancy`]}
    />
    <header
      style={{
        backgroundColor: 'var(--c-midnight-blue)',
        color: 'var(--c-persimmon)',
        padding: '1.5em',
      }}
    >
      <h1
        style={{
          marginTop: 0,
          maxWidth: '15em',
          fontSize: '3.25em',
          lineHeight: '1.25',
          padding: '1em 0 2.5em',
        }}
      >
        Web accessibility and  performance engineering
      </h1>
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
    </header>
    <section className="o-container">
      <h2>Hi!</h2>
      <p>
        Hey there, my name is Radimir Bitsov! I'm front-end engineer with focus on
        building fast and inclusive websites and apps.
      </p>
    </section>
  </Layout>
);

export default IndexPage;
