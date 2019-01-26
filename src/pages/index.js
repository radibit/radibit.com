import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`web performance`, `accessibility`, `consultancy`]} />
    <h1>Hey people</h1>
  </Layout>
)

export default IndexPage
