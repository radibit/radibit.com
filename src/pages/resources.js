import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const ResourcesPage = () => (
  <Layout>
    <SEO title="Resources" keywords={[`web development`, `tooling`, `devtips`]} />
    <h1>Collection of web development resources</h1>
  </Layout>
);

export default ResourcesPage;
