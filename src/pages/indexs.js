import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"


//this index page has been disabled for the purposes of simply showing the blog posts as the home page
//rename this file as index.js to add a different home page.

const IndexPage = ({ data }) => {
  const page = data.mdx
  return (
    <Layout>
      <MDXRenderer>{page.body}</MDXRenderer>
    </Layout>
  )
}
export default IndexPage

export const indexQuery = graphql`
  query index{
    site {
      siteMetadata {
        title
      }
    }
    mdx(fileAbsolutePath: {regex: "/homeservices/"}) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`