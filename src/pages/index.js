import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Welcome" keywords={[`comic`, `convention`, `example`]} />
      <h1>Welcome to Leebo-Con!</h1>
      <p>Check out what's happening at next year's comic-con.</p>
    </Layout>
  )
}
