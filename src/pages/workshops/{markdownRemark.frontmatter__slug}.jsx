import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <div>
        <h1>{frontmatter.title}</h1>
        <StaticImage
          src={frontmatter.images[0]}
        />
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
        images
        tags 
        shortdescription
        files
      }
    }
  }
`