import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Bio from "../main/bio"

import Header from "./header"
import "../styles/layout.css"

import { MDXProvider } from "@mdx-js/react"
import HomeRequestForm from "../../components/forms/HomeRequestForm"
const shortcodes = { HomeRequestForm }

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      imageSharp {
        fluid {
          src
        }
      }
    }
  `)

  return (
    <>
      <div className="viewport">
        <div className="viewport-top">
          <Header
            siteTitle={data.site.siteMetadata.title}
            siteDescription={data.site.siteMetadata.description}
          />
          <div className="site-main">
            <MDXProvider components={shortcodes}>{children}</MDXProvider>
          </div>
        </div>
        <footer>
          <Bio />
        </footer>
      </div>
    </>
  )
}

export default Layout
