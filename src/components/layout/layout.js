import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Bio from '../main/bio'

import Header from "./header"
import "../styles/layout.css"

import { MDXProvider } from "@mdx-js/react"
import HomeRequestForm  from "../../components/forms/HomeRequestForm"
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
      <Helmet>
        <html lang={'en'} />
        <style type="text/css">{''}</style>
        <body className={''} />
      </Helmet>

      <div className="viewport">
        <div className="viewport-top">
        <Header
          siteTitle={data.site.siteMetadata.title}
          siteDescription={data.site.siteMetadata.description}
        />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <MDXProvider components={shortcodes}>{children}</MDXProvider>
          <footer>
            <Bio/>

          </footer>
        </div>
        </div>
      </div>
    </>
  )
}

export default Layout
