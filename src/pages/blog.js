import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Projects" />
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
                  <GatsbyImage
                    image={node.frontmatter.coverPhoto.childImageSharp.gatsbyImageData}
                    // style={{ height: "100%", width: "100%" }}
                    imgStyle={{ objectFit: "contain", borderRadius: "7px" }}
                    alt={node.frontmatter.coverPhoto.name} />
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
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default BlogIndex

export const data = graphql`{
  site {
    siteMetadata {
      title
    }
  }
  allMdx(
    filter: {frontmatter: {group: {eq: "posts"}, isPublished: {eq: true}}}
    sort: {fields: [frontmatter___date], order: DESC}
  ) {
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
            name
            childImageSharp {
              gatsbyImageData(
                height: 300
                width: 600
                transformOptions: {cropFocus: CENTER, fit: COVER}
                layout: CONSTRAINED
              )
            }
          }
        }
      }
    }
  }
}
`
