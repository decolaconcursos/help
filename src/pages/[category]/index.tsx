import { ParsedUrlQuery } from 'node:querystring'
import React from 'react'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

import { getAllCategories } from '@/lib/get-all-categories'
import { getQuestionByCategories } from '@/lib/get-question-by-categories'
import { Header } from '@/components/Header'
import { Question } from '@/lib/models/questions'
import Link from 'next/link'

export const getStaticPaths: GetStaticPaths = () => {
  const categories = getAllCategories()

  const paths = []

  for (const category of categories) {
    paths.push({
      params: {
        category
      }
    })
  }
  return {
    paths,
    fallback: false
  }
}

interface IParams extends ParsedUrlQuery {
  category: string
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { category } = ctx.params as IParams

  const cat = getQuestionByCategories(category)

  const activeQuestions = cat.questions.filter(item => item.active)

  return {
    props: {
      questions: activeQuestions
    }
  }
}

const QuestionPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ questions }) => {
  const lenght = questions.length
  return (

    <div className='min-h-s'>
      <div className='absolute inset-0 bg-[#f9f5f1] z-0' />

      <Header />
      <div className='relative'>
        <div className='max-w-5xl mx-auto px-6 py-12'>
          <div className='flex justify-between items-baseline'>
            <h1 className='text-4xl font-extrabold'>Categorias</h1>
            <p>
              {lenght} Perguntas
            </p>
          </div>
          <div className='space-y-4 mt-16'>
            {
              questions.map((item: Question) => {
                return (<Link href={`/pergunta/${item.slug ?? ''}`}>
                  <div key={item.slug} className='w-full py-6 bg-white px-12 rounded-full'>
                    <p>
                      {item.title}
                    </p>
                  </div>
                </Link>)
              })
            }
          </div>

        </div>

      </div>
    </div>

  )
}

export default QuestionPage
