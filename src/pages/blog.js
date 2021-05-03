import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <div classname="container">
      <div class="post-feed">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
              <Link class="post-card" key={node.fields.slug} to={node.fields.slug} style={{ textDecoration: 'none' }}>
              <div class="post-card-image">
                <Img
                  style={{ height: "100%", width: "100%" }}
                  imgStyle={{ objectFit: "contain" }}
                  fluid={node.frontmatter.coverPhoto.childImageSharp.fluid}
                  alt="test"
                />
              </div>
              <div class="post-card-title">
                <div class="post-card-title-time">
                    {/* <Link
                      class="post-car"
                      style={{ boxShadow: `none`, textDecoration: `none` }}
                      to={node.fields.slug}
                    > */}
                      {title}
                    {/* </Link> */}
                  <small>{node.frontmatter.date}</small>
                </div>
                <section class="post-card-exerpt">
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

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            coverPhoto {
              childImageSharp {
                fluid(maxWidth: 800) {
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
