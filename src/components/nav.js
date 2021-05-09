import React from "react"
import { Link } from "gatsby"

const NavHead = ( props ) => {
  return (
    <>
      <div className="nav-container">
        <div className="nav-list">
          <Link className="site-nav-item" to="/blog">
            Blog
          </Link>
          <Link className="site-nav-item" to="/contact">
            Contact
          </Link>
          <Link className="site-nav-item" to="/resume">
            Resume
          </Link>
          <Link className="site-nav-item" to="/projects">
            Projects
          </Link>
        </div>
      </div>
    </>
  )
}
export default NavHead
