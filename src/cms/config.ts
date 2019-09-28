/* eslint-disable @typescript-eslint/camelcase */
import { topic, exercise, answer, author } from './collections'

const domain = process.env.GATSBY_ORIGIN || 'http://localhost:8000'

const config = {
  load_config_file: false,

  backend: {
    name: 'git-gateway',
    branch: 'master',
    accept_roles: ['admin'],
  },

  publish_mode: 'simple',
  public_folder: '/uploads',

  display_url: domain,
  logo_url: `${domain}/favicon.png`,

  media_folder: 'static/uploads',

  collections: [topic, exercise, answer, author],
}

export default config
