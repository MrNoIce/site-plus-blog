import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import { rhythm } from "../../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`query BioQuery {
  avatar: file(absolutePath: {regex: "/profile-image.jpg/"}) {
    childImageSharp {
      gatsbyImageData(width: 50, height: 50, layout: FIXED)
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
          <GatsbyImage
            image={data.avatar.childImageSharp.gatsbyImageData}
            alt={author.name}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 50,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }} />
        </Link>

        <p>
          Designed & built by <strong>{author.name}</strong> {` `}©{" "}
          {new Date().getFullYear()},{` `}
          <br /> {author.summary}
          {` `}
        </p>
      </div>
    </footer>
  );
}

export default Bio
