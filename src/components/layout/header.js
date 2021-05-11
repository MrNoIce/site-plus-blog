import { Link } from "gatsby"
import Contact from "../main/contact"
import PropTypes from "prop-types"
import React from "react"
import NavHead from './nav'

const Header = ({ siteTitle, siteDescription }) => (
  <header
    className="site-head"
    // style={{
    //   ...(site.cover_image && { backgroundImage: `url(${site.cover_image})` }),
    // }}
  >
    <div className="container">
      <div className="site-mast">
        <div className="site-mast-left">
          <Link to="/">
            {/* {site.logo ? (
              <img className="site-logo" src={site.logo} alt={site.title} />
            ) : (
              <Img fixed={data.file.childImageSharp.fixed} alt={site.title} />
            )} */}
            {siteTitle}
          </Link>
        </div>
        <div className="site-mast-right">
          {/* {site.twitter && (
            <a
              href={twitterUrl}
              className="site-nav-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="site-nav-icon"
                src="/images/icons/twitter.svg"
                alt="Twitter"
              />
            </a>
          )} */}
          {/* {site.facebook && (
            <a
              href={facebookUrl}
              className="site-nav-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="site-nav-icon"
                src="/images/icons/facebook.svg"
                alt="Facebook"
              />
            </a>
          )} */}
          <Contact />
        </div>
      </div>
        <div className="site-banner">
          <h1 className="site-banner-title">{siteTitle}</h1>
          <p className="site-banner-desc">{siteDescription}</p>
        </div>
      <nav className="site-nav">
        <div className="site-nav-left">
          {/* The navigation items as setup in Ghost */}
          {/* <Navigation data={site.navigation} navClass="site-nav-item" /> */}
          <NavHead />
        </div>
        <div className="site-nav-right">
          <Link className="site-nav-button" to="/about">
            About
          </Link>
        </div>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  pages: PropTypes.array.isRequired,
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Header
