import path from 'path'
import fs from 'fs'

export const getAllCategories = (): string[] => {
  const categoriesPath = path.join('src', 'categories')

  return fs.readdirSync(categoriesPath)
}
