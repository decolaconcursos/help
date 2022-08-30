import { getQuestionsFromFolder } from '@/lib/utils/get-questions-from-folder'
import { Questions } from '@/lib/models/questions'

export const getQuestionByCategories = (category: string): Questions => {
  return getQuestionsFromFolder(category)
}
