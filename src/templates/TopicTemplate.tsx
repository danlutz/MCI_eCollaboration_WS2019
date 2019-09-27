import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'reactstrap'

import SEO from '../components/SEO'

export const TopicTemplate = ({
  title,
  description,
  html,
}: TopicTemplateTemplateProps) => {
  return (
    <div>
      <SEO title={title} description={description} />
      <Container className="contentWrapper">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </Container>
    </div>
  )
}

interface TopicTemplateTemplateProps {
  title: string
  description: string
  html: string
}

const Topic = ({ data }: Props) => {
  const { markdownRemark: blogPost } = data
  const {
    html,
    frontmatter: { title, description },
  } = blogPost

  return <TopicTemplate title={title} description={description} html={html} />
}

interface Props {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        title: string
        description: string
      }
    }
  }
}

export default Topic

export const pageQuery = graphql`
  query TopicByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
