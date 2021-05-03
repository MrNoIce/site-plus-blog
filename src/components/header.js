import { Link } from "gatsby"
import Contact from "./contact"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 1 }}>
        <Link
          to="/"
          style={{
            color: `hsla(0, 0%, 0%, 0.8)`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Contact />
      <div className="blog-link" style={{ padding: `.4rem` }}>
        <Link to="/blog/" style={{ float: `right` }}>
          Blog
        </Link>{" "}
      </div>
      <hr
        style={{
          borderBottom: `1px solid #eee`,
          width: `100%`,
          margin: `1rem 0`,
        }}
      />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
