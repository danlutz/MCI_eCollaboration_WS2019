import React from 'react'

import { TopicTemplate } from '../../templates/TopicTemplate'

const TopicPreviewTemplate = ({
  entry,
  widgetFor /*,
  widgetsFor,
  getAsset,*/,
}: NetlifyCMSPreviewTemplateProps) => {
  return (
    <TopicTemplate
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      html={widgetFor('body')}
    />
  )
}

export default TopicPreviewTemplate
