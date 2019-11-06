import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import '../styles/objects.css';
import '../styles/home.css';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Web accessibility and peformance engineering"
      keywords={[`web performance`, `accessibility`, `consultancy`]}
    />
    <header className="c-homeHeader">
      <div>
        <h1>Web accessibility and  performance engineering</h1>
        <p>(comming soon)</p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <svg
          viewBox="0 0 352 360"
          width="352"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
        >
          <g fill="none" strokeWidth="4">
            <path stroke="#ebebeb" d="M147.333 204.99h100v100h-100z" />
            <path
              stroke="#ebebeb"
              strokeLinejoin="miter"
              d="M147.333 204.99h100v100h-100z"
            />
            <path
              d="M105.31 254.127l42.023-49.137M204.978 254.127l42.355-49.137M205.393 353.682l41.94-48.692M147.333 304.99l-40.586 48.453M45.771 305.938L6.154 352.047M346.556 307.93l-40.462 45.752M45.561 206.488L6.257 252.741M346.528 205.67l-39.619 47.383"
              stroke="#ebebeb"
              strokeLinejoin="miter"
              strokeMiterlimit="2"
            />
            <path
              d="M147.333 205.652h-100M105.347 254.99h-100"
              stroke="#ff6153"
              strokeLinejoin="miter"
              strokeMiterlimit="2"
              strokeDasharray="8,16,0,0"
            />
            <path
              d="M304.115 254.99h-100M347.333 205.421h-100M104.939 255.055h99.985v99.544h-99.985zM347.333 304.99h-100"
              stroke="#ebebeb"
              strokeLinejoin="miter"
              strokeMiterlimit="2"
            />
            <path
              d="M147.333 304.35h-100M104.939 354.6H5.347M104.939 154.99v100M204.115 54.99v100M304.115 54.99v100M347.298 4.99v100M247.179 4.99v100"
              stroke="#ff6153"
              strokeLinejoin="miter"
              strokeMiterlimit="2"
              strokeDasharray="8,16,0,0"
            />
            <path
              d="M204.115 54.99h98.813l42.67-49.135"
              stroke="#ebebeb"
              strokeLinejoin="miter"
              strokeMiterlimit="2"
            />
            <path
              d="M146.175 104.99v100"
              stroke="#ff6153"
              strokeLinejoin="miter"
              strokeMiterlimit="2"
              strokeDasharray="8,16,0,0"
            />
            <path
              d="M204.115 154.99v100M104.939 154.99h99.176M146.078 104.268l101.413.722M204.115 154.99l42.474-49.097M105.756 152.727l38.739-47.737M247.414 104.99v100M5.347 254.99v99.61M304.115 255.381V354.6M347.333 206.329v99.609M47.333 205.652v99.143M304.115 254.99v-100M204.115 154.99h100M347.333 205.421V104.99M304.115 155.206l42.441-49.313M247.333 104.99h100M347.298 4.99H246.189l-41.285 47.88M204.924 354.6h99.191"
              stroke="#ebebeb"
              strokeLinejoin="miter"
              strokeMiterlimit="2"
            />
          </g>
        </svg>
      </div>
    </header>
  </Layout>
);

export default IndexPage;
