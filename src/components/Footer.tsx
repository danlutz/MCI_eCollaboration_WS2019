import React from 'react'
import { Container } from 'reactstrap'

import useAuthors from '../hooks/markdown/useAuthors'

import styles from './Footer.module.scss'

const Footer = () => {
  const authors = useAuthors()

  const authorsString = authors
    .sort()
    .reduce(
      (authors, author, i) =>
        `${authors}${i === 0 ? '' : ', '}${author.frontmatter.title}`,
      '',
    )

  return (
    <footer className={styles.wrapper}>
      <Container>
        <span>&#169; {authorsString} 2019</span>
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
          <br />
          Bilder von{' '}
          <a
            href="https://www.pexels.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            www.pexels.com
          </a>
        </span>
      </Container>
    </footer>
  )
}

export default Footer
