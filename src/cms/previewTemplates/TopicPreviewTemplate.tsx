import * as React from 'react'
import { CloudinaryContext } from 'cloudinary-react'

import { TopicTemplate } from '../../templates/TopicTemplate'

const { GATSBY_CLOUDINARY_CLOUD_NAME } = process.env

const TopicPreviewTemplate = ({
  entry,
  widgetFor /*,
  widgetsFor,
  getAsset,*/,
}: NetlifyCMSPreviewTemplateProps) => {
  return (
    <CloudinaryContext cloudName={GATSBY_CLOUDINARY_CLOUD_NAME}>
      <TopicTemplate
        title={entry.getIn(['data', 'title'])}
        description={entry.getIn(['data', 'description'])}
        html={widgetFor('body')}
      />
    </CloudinaryContext>
  )
}

export default TopicPreviewTemplate
