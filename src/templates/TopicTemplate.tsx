import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'reactstrap'

import SEO from '../components/SEO'
import TopicHeader from '../components/TopicHeader'
import ExerciseList from '../components/ExerciseList'

import useExercises from '../hooks/markdown/useExercises'

import { Exercise } from '../typings/CMS'

export const TopicTemplate = ({
  title,
  description,
  html,
  heroImage,
  exercises,
}: TopicTemplateTemplateProps) => {
  return (
    <>
      <SEO title={title} description={description} />
      <TopicHeader title={title} heroImage={heroImage} />
      <Container className="contentWrapper">
        <article style={{ padding: '2rem 0' }}>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
          <ExerciseList exercises={exercises} />
        </article>
      </Container>
    </>
  )
}

interface TopicTemplateTemplateProps {
  title: string
  description: string
  html: string
  heroImage: string
  exercises: Exercise[]
}

const Topic = ({ data }: Props) => {
  const { markdownRemark: topic } = data
  const {
    html,
    frontmatter: { title, description, heroImage, exercises: exerciseTitles },
  } = topic
  const exercises = useExercises(exerciseTitles)

  return (
    <TopicTemplate
      title={title}
      description={description}
      heroImage={heroImage}
      exercises={exercises}
      html={html}
    />
  )
}

interface Props {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        title: string
        description: string
        heroImage: string
        exercises: string[]
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
        heroImage
        exercises
      }
    }
  }
`
