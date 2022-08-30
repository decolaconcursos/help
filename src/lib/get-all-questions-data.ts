import { getAllCategories } from '@/lib/get-all-categories'
import { getQuestionByCategories } from '@/lib/get-question-by-categories'
import { Questions } from '@/lib/models/questions'

export const getAllQuestionsData = (): Questions[] => {
  const allCategories = getAllCategories()

  const questionData: Questions[] = []

  for (const category of allCategories) {
    const categoriesData = getQuestionByCategories(category)
    questionData.push(categoriesData)
  }

  return questionData
}
