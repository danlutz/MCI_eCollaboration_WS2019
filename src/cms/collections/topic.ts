/* eslint-disable @typescript-eslint/camelcase */
import { templateKey, published, title, markdownBody } from '../partials/index'

const topic = {
  name: 'topic',
  label: 'Topic',
  folder: 'src/pages/topics',
  create: true,
  slug: '{{slug}}',
  preview_path: 'topic/{{slug}}',
  fields: [
    templateKey('topic'),
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
    markdownBody,
  ],
}

export default topic
