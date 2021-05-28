import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <div className="container">
        <div className="post-feed">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Link
                className="post-card"
                key={node.fields.slug}
                to={node.fields.slug}
              >
                <div className="post-card-image">
                  <Img
                    style={{ height: "100%", width: "100%" }}
                    imgStyle={{ objectFit: "contain" }}
                    fluid={node.frontmatter.coverPhoto.childImageSharp.fluid}
                    alt="test"
                  />
                </div>
                <div className="post-card-title">
                  <div className="post-card-title-time">
                    {title}
                    <small>{node.frontmatter.date}</small>
                  </div>
                  <section className="post-card-exerpt">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </section>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const data = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {frontmatter: {group: {eq: "posts"}}}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            coverPhoto {
              childImageSharp {
                fluid(maxHeight: 300, maxWidth: 600, cropFocus: CENTER, fit: COVER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
