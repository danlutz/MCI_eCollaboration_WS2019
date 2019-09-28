/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const getTemplateFileName = (templateKey = '') => {
  switch (templateKey) {
    case 'topic':
      return 'TopicTemplate'
    default:
      return null
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const markdownRemarkFileNodes = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `)

  const { data, errors } = markdownRemarkFileNodes

  if (errors) {
    errors.forEach(e => console.error(e.toString()))
    return
  }

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    const {
      id,
      fields: { slug },
      frontmatter: { templateKey },
    } = node

    const templateFileName = getTemplateFileName(templateKey)

    // Only create pages where templateFileName is defined
    if (templateFileName) {
      createPage({
        path: slug,
        component: path.resolve(`src/templates/${templateFileName}.tsx`),
        context: {
          id,
        },
      })
    }
  })
}
