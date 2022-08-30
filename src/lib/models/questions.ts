export interface Question {
  title: string
  sumary: string
  author: string
  date: string
  image?: string
  imageLabel?: string
  active?: boolean
  slug?: string

  content?: string
}

export interface Questions {
  categories: string
  questions: Question[]
}
