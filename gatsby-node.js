/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")

const pageQuery = `
{
  guests: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/guests/"}}) {
    edges {
      node {
        frontmatter {
          name
          credits
          biography
          photo
        }
        fields {
          slug
        }
      }
    }
  }
  events: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/events/"}}) {
    edges {
      node {
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
`

exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(getNode(node.parent).relativePath, ".md")
    createNodeField({ node, name: "slug", value: slug })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(pageQuery)

  if (result.errors) {
    throw result.errors
  }

  for (const key in result.data) {
    const component = path.resolve(`src/templates/${key}.js`)

    for (const { node } of result.data[key].edges) {
      createPage({
        path: node.fields.slug,
        component,
        context: node,
      })
    }
  }
}
