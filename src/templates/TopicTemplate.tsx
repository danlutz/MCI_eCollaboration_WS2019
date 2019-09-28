import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'reactstrap'

import SEO from '../components/SEO'
import ExerciseList from '../components/ExerciseList'

import useExercises from '../hooks/markdown/useExercises'

import { Exercise } from '../typings/CMS'

const TopicHeroImage = ({ img }: TopicHeroImageProps) => {
  return (
    <div>
      <Container>
        <img src={img} alt="" />
      </Container>
    </div>
  )
}

interface TopicHeroImageProps {
  img: string
}

export const TopicTemplate = ({
  title,
  description,
  html,
  exercises,
}: TopicTemplateTemplateProps) => {
  return (
    <>
      <SEO title={title} description={description} />
      <TopicHeroImage img="" />
      <Container className="contentWrapper">
        <h1>{title}</h1>
        <article>
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
  exercises: Exercise[]
}

const Topic = ({ data }: Props) => {
  const { markdownRemark: topic } = data
  const {
    html,
    frontmatter: { title, description, exercises: exerciseTitles },
  } = topic
  const exercises = useExercises(exerciseTitles)

  return (
    <TopicTemplate
      title={title}
      description={description}
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
        exercises
      }
    }
  }
`
