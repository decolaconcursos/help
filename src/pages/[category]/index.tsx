import { ParsedUrlQuery } from 'node:querystring'
import React from 'react'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

import { getAllCategories } from '@/lib/get-all-categories'
import { getQuestionByCategories } from '@/lib/get-question-by-categories'

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

const Question: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ questions }) => {
  return (

    <>
      Categories
    </>

  )
}

export default Question
