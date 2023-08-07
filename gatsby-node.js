const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                template
                group
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const pages = result.data.allMdx.edges

  pages.forEach(({ node }, index) => {
    const previous = index === pages.length - 1 ? null : pages[index + 1].node
    const next = index === 0 ? null : pages[index - 1].node

    if (node.frontmatter.group === "posts" || node.frontmatter.group === "pages") {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`src/templates/${node.frontmatter.template}`),
        context: {
          slug: node.fields.slug,
          previous: previous && previous.frontmatter.group === "posts" ? previous : null,
          next: next && next.frontmatter.group === "posts" ? next : null,
        },
      })
    }
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
