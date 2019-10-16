import React, { useContext } from 'react'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap'

import TopicContext, {
  TopicContextState,
} from '../context/TopicContext/TopicContext'

import useAuthors from '../hooks/markdown/useAuthors'

import styles from './AuthorSwitch.module.scss'

const AuthorSwitch = () => {
  const { author, dispatch } = useContext(TopicContext) as TopicContextState
  const authors = useAuthors()

  const onChange = (e: any) => {
    const { value } = e.target
    dispatch({
      type: 'SET_AUTHOR',
      payload: value,
    })
  }

  return (
    <div className={styles.wrapper}>
      <InputGroup style={{ maxWidth: '300px' }}>
        <InputGroupAddon addonType="prepend">Sichtweise:</InputGroupAddon>
        <Input
          type="select"
          name="author"
          id="author"
          value={author}
          onChange={onChange}
        >
          <option value="all">Alle</option>
          {authors.map(author => {
            const {
              id,
              frontmatter: { title },
            } = author
            return (
              <option key={id} value={title}>
                {title}
              </option>
            )
          })}
        </Input>{' '}
      </InputGroup>
    </div>
  )
}

export default AuthorSwitch
