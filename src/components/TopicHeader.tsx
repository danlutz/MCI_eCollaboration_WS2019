import React from 'react'
import { Container } from 'reactstrap'

import styles from './TopicHeader.module.scss'

const TopicHeader = ({ title, heroImage }: Props) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        background: `url(${heroImage}) center center no-repeat`,
        backgroundSize: 'cover',
      }}
    >
      <div className={styles.title}>
        <Container>
          <h1>{title}</h1>
        </Container>
      </div>
    </div>
  )
}

interface Props {
  title: string
  heroImage: string
}

export default TopicHeader
