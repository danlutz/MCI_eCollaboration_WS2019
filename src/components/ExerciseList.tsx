import React, { useContext } from 'react'

import TopicContext, {
  TopicContextState,
} from '../context/TopicContext/TopicContext'

import AuthorSwitch from './AuthorSwitch'

import styles from './ExerciseList.module.scss'

import { Exercise, Answer } from '../typings/CMS'

const ExerciseAnswer = ({ answer }: ExerciseAnswerProps) => {
  const { html, authors } = answer

  const answerAuthors = authors
    .sort()
    .reduce((answerAuthors, author) => `${answerAuthors}, ${author}`)

  return (
    <div>
      <span style={{ color: '#666' }}>{answerAuthors}</span>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

interface ExerciseAnswerProps {
  answer: Answer
}

const ExerciseListItem = ({ exercise }: ExerciseListItemProps) => {
  const { author } = useContext(TopicContext) as TopicContextState
  const { title, html, answers } = exercise

  const filteredAnswers = answers.filter(
    ({ authors }) => authors.includes(author) || author === 'all',
  )

  const sortedAnswers = filteredAnswers.sort((a, b) =>
    String(a.authors.sort()).localeCompare(String(b.authors.sort())),
  )

  return (
    <>
      <h3>{title}</h3>
      <div
        className={styles.taskDescription}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {sortedAnswers.map(answer => (
        <ExerciseAnswer key={answer.id} answer={answer} />
      ))}
    </>
  )
}

interface ExerciseListItemProps {
  exercise: Exercise
}

const ExerciseList = ({ exercises }: Props) => {
  return (
    <>
      <h2>Aufgaben</h2>
      <AuthorSwitch></AuthorSwitch>
      {exercises.map(exercise => (
        <ExerciseListItem key={exercise.id} exercise={exercise} />
      ))}
    </>
  )
}

interface Props {
  exercises: Exercise[]
}

export default ExerciseList
