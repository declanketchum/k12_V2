import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
    return (
        <Layout pageTitle="K12 STEAM Activities">
            <p>I'm making this by following the Gatsby Tutorial.</p>
            <StaticImage
                alt="young boy playing with fidget spinner he made"
                src="../images/spinners1.jpg"
            />
        </Layout>
    )
  }
  
// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage

