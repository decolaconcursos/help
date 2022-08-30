import fs from 'fs'
import path from 'path'
import { Question } from '@/lib/models/questions'
import matter from 'gray-matter'

interface MatterAdapterResult {
  question: Question
  content: string
}

export const matterAdapter = (filePath: string, fileName: string): MatterAdapterResult => {
  const markdownWithMeta = fs.readFileSync(path.join(process.cwd(), filePath, fileName + '.mdx'), 'utf-8')
  const { data: frontMatter, content } = matter(markdownWithMeta)
  return {
    question: frontMatter as Question,
    content
  }
}
