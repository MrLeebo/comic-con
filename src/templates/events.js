import React from "react"
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
        {location}{" "}
        <small>
          {start_at} - {end_at}
        </small>
      </h2>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </Layout>
  )
}
