import { graphql, useStaticQuery } from 'gatsby'

interface Topic {
  id: string
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
    subtitle: string
    description: string
  }
}

const useBlogPosts = () => {
  const { topics } = useStaticQuery(
    graphql`
      query {
        topics: allMarkdownRemark(
          filter: {
            frontmatter: {
              templateKey: { eq: "topic" }
              published: { eq: true }
            }
          }
        ) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
              subtitle
              description
            }
            id
          }
        }
      }
    `,
  )

  return topics.nodes as Topic[]
}

export default useBlogPosts
