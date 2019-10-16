/* eslint-disable @typescript-eslint/camelcase */

import React, { createContext, useReducer } from 'react'

const defaultTopicContext = {
  author: 'all',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dispatch: (action: TopicContextReducerAction) => {},
}

export interface TopicContextState {
  author: string
  dispatch: DispatchTopicContext
}

const TopicContextReducer = (
  state: TopicContextState,
  action: TopicContextReducerAction,
) => {
  const { type, payload } = action

  switch (type) {
    case 'SET_AUTHOR':
      return {
        ...state,
        author: payload,
      }

    default:
      console.error(`Undefined reducer action type "${type}"`)
      return state
  }
}

export const TopicContext = createContext(defaultTopicContext)

export const TopicContextProvider = ({
  children,
}: TopicContextProviderProps) => {
  const [state, dispatch] = useReducer(TopicContextReducer, defaultTopicContext)
  return (
    <TopicContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TopicContext.Provider>
  )
}

interface TopicContextProviderProps {
  children: React.ReactNode
}

export interface TopicContextReducerAction {
  type: 'SET_AUTHOR'
  payload?: any
}

export type DispatchTopicContext = (action: TopicContextReducerAction) => void

export default TopicContext
