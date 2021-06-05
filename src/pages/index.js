import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"


const IndexPage = ({ data }) => {
  const page = data.mdx
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout>
      {siteTitle}
      <h2>
        Hi, I'm Jake Scott - engineer by design - all-around general handyman.
      </h2>
      <h2>
        My latest projects can be found on my <Link to="/blog">blog</Link> and
        my services can be found <Link to="/services">here</Link>
      </h2>
      <h3>
        I have an array of different specialities within my skillset which
        include but not limited to, <Link to="/welding">welding</Link>, {" "}
        <Link to="/electrical">electrical</Link>,{" "}
        <Link to="plumbing">plumbing</Link>, and {" "}
        <Link to="/auto-repair">automotive repair </Link>and diagnosis. <br />
        <hr/>
        If you would like for me to help out in any way, feel free to use the form below.

      </h3>
      <h2>Here is about where the hell I'll figure out to put some more shit about this site</h2>
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
    mdx(fileAbsolutePath: {regex: "/Homeservices/"}) {
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