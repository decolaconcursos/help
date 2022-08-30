import path from 'path'
import * as fs from 'fs'
import { mocked } from 'jest-mock'

jest.mock('fs')

const getAllCategories = (): string[] => {
  const categoriesPath = path.join(process.cwd(), 'src', 'categories')

  return fs.readdirSync(categoriesPath)
}

describe('GetAllCategories Unit Test', () => {
  let sut: string[]
  const expectedFolder = ['decola-concursos', 'pagamento', 'reembolso']

  beforeAll(() => {
    const readdirSyncStub = jest.fn().mockImplementation(() => {
      return expectedFolder
    })
    mocked(fs.readdirSync).mockImplementation(readdirSyncStub)
  })

  beforeEach(() => {
    sut = getAllCategories()
  })
  it('Should return all folders on ./src/categories folders', () => {
    expect(sut).toEqual(expectedFolder)
  })
})

export {}
