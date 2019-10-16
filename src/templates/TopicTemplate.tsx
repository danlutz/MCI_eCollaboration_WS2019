import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'reactstrap'

import { TopicContextProvider } from '../context/TopicContext/TopicContext'

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
  pdf,
  exercises,
}: TopicTemplateTemplateProps) => {
  return (
    <TopicContextProvider>
      <SEO title={title} description={description} />
      <TopicHeader title={title} heroImage={heroImage} />
      <Container
        className="contentWrapper"
        style={{ background: "url('/images/pattern.png')" }}
      >
        <article style={{ padding: '2rem 0' }} className="topic">
          <a href={pdf} target="_blank" rel="noopener noreferrer">
            Aufgabenstellungen anzeigen
          </a>
          <br />
          <br />
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <ExerciseList exercises={exercises} />
        </article>
      </Container>
    </TopicContextProvider>
  )
}

interface TopicTemplateTemplateProps {
  title: string
  description: string
  html: string
  pdf: string
  heroImage: string
  exercises: Exercise[]
}

const Topic = ({ data }: Props) => {
  const { markdownRemark: topic } = data
  const {
    html,
    frontmatter: {
      title,
      description,
      heroImage,
      pdf,
      exercises: exerciseTitles,
    },
  } = topic
  const exercises = useExercises(exerciseTitles)

  return (
    <TopicTemplate
      title={title}
      description={description}
      heroImage={heroImage}
      pdf={pdf}
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
        pdf: string
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
        pdf
        heroImage
        exercises
      }
    }
  }
`
