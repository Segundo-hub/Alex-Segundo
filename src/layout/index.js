
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./../assets/main.scss";

import Header from "../components/header"
import { Footer } from "../components/footer";
import { CenterApplication } from "../components/container/CenterApp";
import { Provider } from "react-redux";
import { store } from "../store";

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
    <Provider store={ store }>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <CenterApplication id="app_main_wrapper">{ children }</CenterApplication>
      <Footer />
    </Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
