import { graphql, useStaticQuery } from 'gatsby'
import { RawExercises, RawAnswers, Answer, Exercise } from '../../typings/CMS'

const filterAndFormatAnswers = (
  rawAnswers: RawAnswers,
  answerTitles: string[],
) => {
  const filteredAnswers = rawAnswers.nodes.filter(
    answer => answerTitles && answerTitles.includes(answer.frontmatter.title),
  )

  const formattedAnswers = filteredAnswers.map(answer => {
    const {
      id,
      html,
      frontmatter: { title, authors },
    } = answer

    const formattedAnswer: Answer = {
      id,
      html,
      title,
      authors,
    }

    return formattedAnswer
  })

  return formattedAnswers
}

const filterAndFormatExercises = (
  rawExercises: RawExercises,
  rawAnswers: RawAnswers,
  exerciseTitles: string[],
) => {
  const filteredExercises = rawExercises.nodes.filter(
    exercise =>
      exerciseTitles && exerciseTitles.includes(exercise.frontmatter.title),
  )

  const formattedExercises = filteredExercises.map(exercise => {
    const {
      id,
      html,
      frontmatter: { title, answers: answerTitles },
    } = exercise

    const answers = filterAndFormatAnswers(rawAnswers, answerTitles)

    const formattedExercise: Exercise = {
      id,
      html,
      title,
      answers,
    }

    return formattedExercise
  })

  return formattedExercises
}

const useExercises = (exerciseTitles: string[]) => {
  const { rawExercises, rawAnswers } = useStaticQuery(
    graphql`
      query {
        rawExercises: allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "exercise" } } }
        ) {
          nodes {
            id
            html
            frontmatter {
              title
              answers
            }
          }
        }
        rawAnswers: allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "answer" } } }
        ) {
          nodes {
            id
            html
            frontmatter {
              title
              authors
            }
          }
        }
      }
    `,
  ) as {
    rawExercises: RawExercises
    rawAnswers: RawAnswers
  }

  const exercises = filterAndFormatExercises(
    rawExercises,
    rawAnswers,
    exerciseTitles,
  )

  return exercises
}

export default useExercises
