import React from 'react'

import styles from './ExerciseList.module.scss'

import { Exercise, Answer } from '../typings/CMS'

const ExerciseAnswer = ({ answer }: ExerciseAnswerProps) => {
  const { title, html } = answer
  return (
    <div>
      <h4>{title}</h4>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

interface ExerciseAnswerProps {
  answer: Answer
}

const ExerciseListItem = ({ exercise }: ExerciseListItemProps) => {
  const { title, html, answers } = exercise
  return (
    <>
      <h3>{title}</h3>
      <div
        className={styles.taskDescription}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {answers.map(answer => (
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
