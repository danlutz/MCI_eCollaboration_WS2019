/* eslint-disable @typescript-eslint/camelcase */
import { templateKey, title, markdownBody } from '../partials/index'
import { collectionName as answerCollectionName } from './answer'

export const collectionName = 'exercise'

const exercise = {
  name: collectionName,
  label: 'Exercises',
  label_singular: 'Exercise',
  folder: 'src/pages/exercises',
  create: true,
  slug: '{{slug}}',
  fields: [
    templateKey(collectionName),
    title,
    {
      label: 'Answer',
      name: 'answers',
      widget: 'relation',
      collection: answerCollectionName,
      multiple: true,
      valueField: 'title',
      searchFields: ['title'],
      displayFields: ['title', 'authors'],
    },
    { ...markdownBody, label: 'Task definition' },
  ],
}

export default exercise
