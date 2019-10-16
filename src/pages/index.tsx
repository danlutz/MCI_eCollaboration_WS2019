import React from 'react'
import { Container } from 'reactstrap'

import TopicList from '../components/TopicList'

import styles from './index.module.scss'

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroTitle}>
        <Container>
          <h1>eCollaboration</h1>
          <strong>Ein interaktives ePortfolio</strong>
        </Container>
      </div>
    </section>
  )
}

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <HeroSection />
      <Container>
        <section className={styles.section}>
          <TopicList />
        </section>
      </Container>
    </div>
  )
}

export default HomePage
