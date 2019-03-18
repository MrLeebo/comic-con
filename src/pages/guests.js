import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function GuestsPage() {
  return (
    <Layout>
      <SEO
        title="Guests"
        keywords={[`comic`, `convention`, `guests`, `autographs`]}
      />
      <h1>Guests</h1>
      <p>See who is coming to comic-con:</p>
      <p>There are no guests attending next year.</p>
    </Layout>
  )
}
