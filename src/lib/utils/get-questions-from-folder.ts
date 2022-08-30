import fs from 'node:fs'
import path from 'node:path'
import { matterAdapter } from '@/lib/adapters/gray-matter'
import { Question, Questions } from '@/lib/models/questions'

export const getQuestionsFromFolder = (value: string): Questions => {
  const questionsList: Question[] = []
  const filePath = `src/categories/${value}`
  const paths = getAllSlugByFolder(value)

  for (const fileName of paths) {
    const { question, content } = matterAdapter(filePath, fileName)

    questionsList.push({
      ...question,
      content
    })
  }

  return {
    category: value,
    questions: questionsList
  }
}

export const getAllSlugByFolder = (folder: string): string[] => {
  const filePath = `src/categories/${folder}`
  return fs.readdirSync(path.join(process.cwd(), filePath)).map(item => item.split('.')[0])
}
