import React from 'react'
import { Link } from 'gatsby'

import useTopics from '../hooks/markdown/useTopics'

import styles from './TopicList.module.scss'

const TopicList = () => {
  const topics = useTopics()

  return (
    <>
      {topics.map(topic => {
        const {
          id,
          fields: { slug },
          frontmatter: { title, subtitle, description },
        } = topic

        return (
          <Link
            key={id}
            to={slug}
            className={styles.topicListItem}
            style={{ color: '#323232' }}
          >
            <h3>{title}</h3>
            <strong>{subtitle}</strong>
            <p>{description}</p>
          </Link>
        )
      })}
    </>
  )
}

export default TopicList
