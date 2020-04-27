const { createWiki } = require('./src/create-pages')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMdx(limit: 1000, filter: { frontmatter: { draft: { ne: true } } }) {
        edges {
          node {
            id
            body
            parent {
              ... on File {
                name
                base
                relativePath
                sourceInstanceName
              }
            }
          }
        }
      }
    }
  `)

  const { allMdx } = result.data
  createWiki({ allMdx, createPage })
}
