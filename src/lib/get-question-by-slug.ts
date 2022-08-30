import { getAllCategories } from '@/lib/get-all-categories'
import { Question } from '@/lib/models/questions'
import { getQuestionByCategories } from '@/lib/get-question-by-categories'

export const getQuestionBySlug = (slug: string): Question => {
  const categories = getAllCategories()

  const questions: Question[] = []

  for (const category of categories) {
    const listOfArticles = getQuestionByCategories(category)
    const matchedQuestionIndex = listOfArticles.questions.findIndex(item => item.slug === slug)
    if (typeof listOfArticles.questions[matchedQuestionIndex] !== 'undefined') {
      questions.push(listOfArticles.questions[matchedQuestionIndex])
    }
  }

  return questions[0]
}
