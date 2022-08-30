import React from 'react'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { getAllCategories } from '@/lib/get-all-categories'
import { getAllSlugByFolder } from '@/lib/utils/get-questions-from-folder'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { getQuestionBySlug } from '@/lib/get-question-by-slug'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

export const getStaticPaths: GetStaticPaths = () => {
  const categories = getAllCategories()

  const paths = []

  for (const category of categories) {
    const questions = getAllSlugByFolder(category)

    for (const question of questions) {
      paths.push({
        params: {
          question
        }
      })
    }
  }
  return {
    paths,
    fallback: false
  }
}

interface IParams extends ParsedUrlQuery {
  question: string
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { question } = ctx.params as IParams

  const quest = getQuestionBySlug(question)
  const { content, ...params } = quest
  if (params.active === false) {
    return {
      notFound: true
    }
  }

  const mdxSource = await serialize(content)

  return {
    props: {
      params,
      source: mdxSource
    }
  }
}

const Question: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ source, params }) => {
  const router = useRouter()
  const question = router.query.question as string

  return (

      <>
        {question}
        <br />
        <MDXRemote {...source} />
      </>

  )
}

export default Question
