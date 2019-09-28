/* eslint-disable @typescript-eslint/camelcase */
import { templateKey, published, title, markdownBody } from '../partials/index'
import { collectionName as exerciseCollectionName } from './exercise'

export const collectionName = 'topic'

const topic = {
  name: collectionName,
  label: 'Topics',
  label_singular: 'Topic',
  folder: 'src/pages/topics',
  create: true,
  slug: '{{slug}}',
  preview_path: 'topic/{{slug}}',
  fields: [
    templateKey(collectionName),
    published,
    title,
    {
      label: 'Subtitle',
      name: 'subtitle',
      widget: 'string',
    },
    {
      label: 'Description',
      name: 'description',
      widget: 'text',
      hint: 'Important for Search Engine Optimization',
    },
    {
      label: 'Hero Image',
      name: 'heroImage',
      widget: 'image',
      hint: 'Image shown on top of page and on when sharing on social media',
    },
    {
      label: 'Exercises',
      name: 'exercises',
      widget: 'relation',
      collection: exerciseCollectionName,
      multiple: true,
      valueField: 'title',
      searchFields: ['title'],
      displayFields: ['title'],
    },
    markdownBody,
  ],
}

export default topic
