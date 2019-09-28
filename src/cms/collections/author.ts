/* eslint-disable @typescript-eslint/camelcase */
import { templateKey, title, markdownBody } from '../partials/index'

export const collectionName = 'author'

const topic = {
  name: collectionName,
  label: 'Authors',
  label_singular: 'Author',
  folder: 'src/pages/authors',
  create: true,
  slug: '{{slug}}',
  editor: {
    preview: false,
  },
  fields: [
    templateKey(collectionName),
    { ...title, hint: 'First and last name' },
    {
      label: 'Avatar',
      name: 'avatar',
      widget: 'image',
      required: false,
    },
    { ...markdownBody, required: false },
  ],
}

export default topic
