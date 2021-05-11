import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-image.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <footer className="site-foot">
      <div
        style={{
          display: `flex`,
          marginBottom: rhythm(2.5),
        }}
      >
        <Link
          to="/"
          style={{
            boxShadow: `none`,
            color: `#007acc`,
            textDecoration: `none`,
          }}
        >
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author.name}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 50,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
        </Link>

        <p>
          Written by <strong>{author.name}</strong> {` `}©{" "}
          {new Date().getFullYear()},{` `}
          <br /> {author.summary}
          {` `}
        </p>
      </div>
    </footer>
  )
}

export default Bio
