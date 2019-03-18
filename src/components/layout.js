import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
            authorUrl
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Helmet>
          <link
            rel="stylesheet"
            href="https://unpkg.com/tachyons@4/css/tachyons.min.css"
          />
        </Helmet>
        <div className="mw7 center">
          <img
            className="mt4 mw-100"
            src="https://source.unsplash.com/1400x400/?comic"
            alt=""
          />

          <nav className="bt bb tc">
            <h1 style={{ margin: 0 }}>
              <Link
                className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
                to="/"
              >
                Welcome
              </Link>
              <Link
                className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
                to="/guests"
              >
                Guests
              </Link>

              <Link
                className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
                to="/events"
              >
                Events
              </Link>
            </h1>
          </nav>

          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()},{" "}
            <a href={data.site.siteMetadata.authorUrl}>
              {data.site.siteMetadata.author}
            </a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
