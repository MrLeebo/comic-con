import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import moment from "moment"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function EventsPage() {
  const { events } = useStaticQuery(graphql`
    query EventsQuery {
      events: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/events/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              name
              location
              start_at
              end_at
              description
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
        title="Events"
        keywords={[`comic`, `convention`, `events`, `panels`]}
      />
      <h1>Events</h1>
      <p>Check out the upcoming events for next comic-con:</p>

      <ul className="list">
        {events.edges.map(({ node }) => (
          <li key={node.id}>
            <h2>
              <Link className="link" to={node.fields.slug}>
                {node.frontmatter.name}
              </Link>
            </h2>
            <h3>
              {node.frontmatter.location}{" "}
              <small>
                {moment(node.frontmatter.start_at).format("MMM Do LT")} -{" "}
                {moment(node.frontmatter.end_at).format("LT")}
              </small>
            </h3>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
