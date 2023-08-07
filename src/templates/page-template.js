import React ,{ useEffect }from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { graphql } from "gatsby"

const PageTemplate = ({ data, location }) => {
  const page = data.mdx;
  const siteTitle = data.site.siteMetadata.title;

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  // Scroll to top when component mounts or when next/previous links are clicked
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={page.frontmatter.title}
        description={page.frontmatter.description || page.excerpt}
      />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {page.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {page.frontmatter.date}
          </p>
        </header>
        <MDXRenderer>{page.body}</MDXRenderer>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      </article>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query PageQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
