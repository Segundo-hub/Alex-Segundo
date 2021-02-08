
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./../assets/main.scss";

import Header from "../components/header"
import { Footer } from "../components/footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(/*graphql*/ graphql` 
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main id="center-app">{ children }</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
