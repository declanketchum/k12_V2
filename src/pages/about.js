// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there</p>
    </Layout>
  )
}

export const Head = () => <title>About</title>

export default AboutPage