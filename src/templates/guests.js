import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function GuestPage({ pageContext: node }) {
  const { name, credits, biography, photo } = node.frontmatter

  return (
    <Layout>
      <SEO
        title={name}
        keywords={[`comic`, `convention`, `guests`, `autographs`]}
      />

      <img className="fl ph4" src={photo} alt="" />
      <h1>{name}</h1>
      <h2 className="i">{credits}</h2>
      <div
        className="f6 f5-l lh-copy"
        dangerouslySetInnerHTML={{ __html: biography }}
      />
    </Layout>
  )
}
