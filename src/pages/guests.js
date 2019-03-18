import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function GuestsPage() {
  const { guests } = useStaticQuery(graphql`
    query GuestsQuery {
      guests: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/guests/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              name
              credits
              photo
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title="Guests"
        keywords={[`comic`, `convention`, `guests`, `autographs`]}
      />
      <h1>Guests</h1>
      <p>See who is coming to comic-con:</p>

      <ul className="list">
        {guests.edges.map(({ node }) => (
          <li key={node.id} className="cf">
            <div className="fl w-20 pr4">
              <img className="br4" src={node.frontmatter.photo} alt="" />
            </div>
            <div className="fl w-80">
              <h1>
                <Link className="link" to={node.fields.slug}>
                  {node.frontmatter.name}
                </Link>
              </h1>
              <h2 className="f3 f4-l">{node.frontmatter.credits}</h2>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
