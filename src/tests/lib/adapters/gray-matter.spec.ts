import { mocked } from 'jest-mock'
import fs from 'fs'
import { Question } from '@/lib/models/questions'
import { matterAdapter } from '@/lib/adapters/gray-matter'

jest.mock('fs')

export const makeQuestionData = (): Question => {
  return {
    title: 'any_title',
    sumary: 'any_sumary',
    author: 'any_author',
    date: 'any_date',
    active: false,
    image: 'any_image',
    content: 'any_content'
  }
}
describe('GrayMatterAdapter', () => {
  const questionData = makeQuestionData()

  beforeEach(() => {
    const readFileSyncStub = jest.fn().mockImplementation(() => {
      return '---\n title: any_title\n sumary: any_sumary\n active: false\n author: any_author\n date: any_date\n image: any_image\n content: any_content \n---\nany_content'
    })
    mocked(fs.readFileSync).mockImplementation(readFileSyncStub)
  })

  it('Should return question and content if success', () => {
    const sut = matterAdapter('any_filePath', 'any_fileName')
    expect(sut).toEqual({
      question: questionData,
      content: 'any_content'
    })
  })
})

export {}
