import React from "react"
import moment from "moment"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function GuestPage({ pageContext: node }) {
  const { name, description, location, start_at, end_at } = node.frontmatter

  return (
    <Layout>
      <SEO
        title={name}
        keywords={[`comic`, `convention`, `events`, `panels`]}
      />
      <h1>{name}</h1>
      <h2>
        <span className="pr4">{location}</span>
        <small>
          {moment(start_at).format("MMM Do LT")}
          {" to "}
          {moment(end_at).format("LT")}
        </small>
      </h2>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </Layout>
  )
}
