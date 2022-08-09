import React from "react"
import { useStaticQuery, graphql } from "gatsby" // to query for image data
import Img from "gatsby-image" // to take image data and render it

const AboutMe = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/profile-image.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="about-me-page">
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="My profile image"
        className="about-me-profile-img"
      />
      <div className="about-me-text">
        <h4>Hello! I'm Jake</h4>
        <p>
          I am a mix of creative and analytical. I aspire to be part of the
          industry where this duality co-exists. As an entrepreneur, I was able
          to explore my creativity and pore over details and strategy, but the
          small scale auto repair industry left me wanting more. As a software
          developer, I am now able to bring my analytical and creative mindset
          together in a harmonious way.
        </p>
      </div>
    </div>
  )
}
export default AboutMe
