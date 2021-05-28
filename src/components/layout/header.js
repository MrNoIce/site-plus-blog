import { Link } from "gatsby"
import Contact from "../main/contact"
import PropTypes from "prop-types"
import React from "react"
import NavHead from "./nav"

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
          <Link className="site-nav" to="/about">
            About
          </Link>
        </div>
        <div className="site-mast-right">
          <Contact />
        </div>
      </div>
      <div className="site-banner">
        <Link to="/">
          <h1 className="site-banner-title">{siteTitle}</h1>
        </Link>
      </div>
      <nav className="site-nav">
        <div className="site-nav-left">
          {/* The navigation items as setup in Ghost */}
          {/* <Navigation data={site.navigation} navClass="site-nav-item" /> */}
          <NavHead />
        </div>
        <div className="site-nav-right"></div>
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
