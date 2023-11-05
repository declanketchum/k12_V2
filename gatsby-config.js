/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `K-12 Workshops`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "content",
      "path": "./src/content/"
    },
    __key: "content"
  },
  'gatsby-transformer-remark',
    
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
 ]
};