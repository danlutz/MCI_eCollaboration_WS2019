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
    exercises?: string[]
  }
}

const useTopics = () => {
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
              description
              exercises
            }
            id
          }
        }
      }
    `,
  ) as {
    topics: {
      nodes: Topic[]
    }
  }

  const sortedTopics = topics.nodes.sort((a, b) =>
    a.frontmatter.title.localeCompare(b.frontmatter.title),
  )

  return sortedTopics
}

export default useTopics
