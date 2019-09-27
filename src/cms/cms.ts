import CMS from 'netlify-cms-app'

import config from './config'
import TopicPreviewTemplate from './previewTemplates/TopicPreviewTemplate'

import './previewStyles.scss'

CMS.registerPreviewTemplate('topic', TopicPreviewTemplate)

CMS.init({ config })
