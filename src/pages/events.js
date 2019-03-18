import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function EventsPage() {
  return (
    <Layout>
      <SEO
        title="Events"
        keywords={[`comic`, `convention`, `events`, `panels`]}
      />
      <h1>Events</h1>
      <p>Check out the upcoming events for next comic-con:</p>
      <p>There are no events scheduled.</p>
    </Layout>
  )
}
