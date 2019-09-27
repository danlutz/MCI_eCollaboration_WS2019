/* eslint-disable @typescript-eslint/camelcase */
import topic from './collections/topic'

const domain = process.env.GATSBY_ORIGIN || 'localhost:8000'

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

  collections: [topic],
}

export default config
