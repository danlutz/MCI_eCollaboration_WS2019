/* eslint-disable @typescript-eslint/camelcase */
import { templateKey, title, markdownBody } from '../partials/index'
import { collectionName as authorCollectionName } from './author'

export const collectionName = 'answer'

const topic = {
  name: collectionName,
  label: 'Answers',
  label_singular: 'Answer',
  folder: 'src/pages/answers',
  create: true,
  slug: '{{slug}}',
  fields: [
    templateKey(collectionName),
    title,
    {
      label: 'Author',
      name: 'authors',
      widget: 'relation',
      collection: authorCollectionName,
      multiple: true,
      valueField: 'title',
      searchFields: ['title'],
      displayFields: ['title'],
    },
    markdownBody,
  ],
}

export default topic
