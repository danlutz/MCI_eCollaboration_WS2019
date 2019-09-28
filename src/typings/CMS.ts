export interface RawExercises {
  nodes: {
    id: string
    html: string
    frontmatter: {
      title: string
      answers: string[]
    }
  }[]
}

export interface RawAnswers {
  nodes: {
    id: string
    html: string
    frontmatter: {
      title: string
      authors: string[]
    }
  }[]
}

export interface Answer {
  id: string
  title: string
  authors: string[]
  html: string
}

export interface Exercise {
  id: string
  html: string
  title: string
  answers: Answer[]
}
