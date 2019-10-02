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
  editor: {
    preview: false,
  },
  fields: [
    templateKey(collectionName),
    published,
    title,
    {
      label: 'Description',
      name: 'description',
      widget: 'text',
      hint: 'Used for SEO and topic previews',
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
      required: false,
      valueField: 'title',
      searchFields: ['title'],
      displayFields: ['title'],
    },
  ],
}

export default topic
