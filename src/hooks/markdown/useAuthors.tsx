import { graphql, useStaticQuery } from 'gatsby'

interface Author {
  id: string
  frontmatter: {
    title: string
  }
}

const useAuthors = () => {
  const { authors } = useStaticQuery(
    graphql`
      query {
        authors: allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "author" } } }
        ) {
          nodes {
            id
            frontmatter {
              title
            }
          }
        }
      }
    `,
  )

  return authors.nodes as Author[]
}

export default useAuthors
