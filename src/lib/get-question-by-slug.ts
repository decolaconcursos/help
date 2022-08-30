import { getAllCategories } from '@/lib/get-all-categories'
import { Question } from '@/lib/models/questions'
import { getQuestionByCategories } from '@/lib/get-question-by-categories'

export const getQuestionBySlug = (slug: string): Question => {
  const categories = getAllCategories()

  let questions: Question[] = []

  for (const category of categories) {
    const listOfArticles = getQuestionByCategories(category)

    questions = listOfArticles.questions.filter(item => item.slug === slug)
  }

  return questions[0]
}
