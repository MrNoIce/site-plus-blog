import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"


const IndexPage = ({ data }) => {
  const page = data.mdx
  const siteTitle = data.site.siteMetadata.title
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