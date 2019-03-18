import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import "./layout.css"

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default function Layout({ children }) {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
          authorUrl
        }
      }
    }
  `)

  return (
    <>
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
        <footer className="mv4 tc">
          © {new Date().getFullYear()},{" "}
          <a href={site.siteMetadata.authorUrl}>{site.siteMetadata.author}</a>
        </footer>
      </div>
    </>
  )
}
