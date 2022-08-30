import path from 'path'
import * as fs from 'fs'
import { mocked } from 'jest-mock'

jest.mock('fs')

const getAllCategories = (): string[] => {
  const categoriesPath = path.join('src', 'categories')

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
  it('should return all folders on ./src/categories folders', () => {
    expect(sut).toEqual(expectedFolder)
  })

  it('fs.readdirSync should be called with ./src/categories ', () => {
    const fsSpy = jest.spyOn(fs, 'readdirSync')
    expect(fsSpy).toHaveBeenCalledWith('src/categories')
  })
})

export {}
