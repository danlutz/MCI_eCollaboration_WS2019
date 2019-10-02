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
  editor: {
    preview: false,
  },
  fields: [
    templateKey(collectionName),
    { ...title, label: 'Question' },
    {
      label: 'Answer',
      name: 'answers',
      widget: 'relation',
      collection: answerCollectionName,
      multiple: true,
      required: false,
      valueField: 'title',
      searchFields: ['title'],
      displayFields: ['title', 'authors'],
    },
    { ...markdownBody, label: 'Task definition', required: false },
  ],
}

export default exercise
