import React from "react"
import { Link } from "gatsby"

const NavHead = ( props ) => {
  return (
    <>
      <div className="nav-container">
        <div className="nav-list">
          <Link className="site-nav-item" to="/blog">
            Assets
          </Link>
          {/* <Link className="site-nav-item" to="/projects">
            Projects
          </Link> */}
          <Link className="site-nav-item" to="/resume">
            Resume
          </Link>
          <Link className="site-nav-item" to="/contact">
            Contact
          </Link>
          <Link className="site-nav-item" to="/about">
            About
          </Link>
          {/* <Link className="site-nav-item" to="/services">
            Services
          </Link> */}
        </div>
      </div>
    </>
  )
}
export default NavHead
