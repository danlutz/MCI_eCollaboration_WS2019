import * as React from 'react'
import { Container } from 'reactstrap'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <span>&#169; Daniel Lutz, Jennifer Sonntag 2019</span>
        <span>
          <br />
          <br />
          Favicon von{' '}
          <a
            href="https://www.flaticon.com/authors/freepik"
            title="Freepik"
            target="_blank"
            rel="noopener noreferrer"
          >
            Freepik
          </a>{' '}
          auf{' '}
          <a
            href="https://www.flaticon.com/"
            title="Flaticon"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.flaticon.com
          </a>
        </span>
      </Container>
    </footer>
  )
}

export default Footer
