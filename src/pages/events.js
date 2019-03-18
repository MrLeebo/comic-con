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
        {events.edges.map(({ node }, index) => (
          <li key={node.id}>
            <div className={`br4 pa4 ${index % 2 === 0 ? "" : "bg-black-10"}`}>
              <h2>
                <Link className="link dark-blue dim" to={node.fields.slug}>
                  {node.frontmatter.name}
                </Link>
              </h2>
              <h3>
                <span className="pr4">{node.frontmatter.location}</span>
                <small>
                  {moment(node.frontmatter.start_at).format("MMM Do LT")}
                  {" to "}
                  {moment(node.frontmatter.end_at).format("LT")}
                </small>
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
