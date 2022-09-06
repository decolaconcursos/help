// Create By: Lenderson on 9/5/2022

import React from 'react'
import { TopicList } from '@/layouts/topics-list'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import path from 'path'
import * as fs from 'fs'

type Props = InferGetServerSidePropsType<typeof getServerSideProps> & {

}

const Decola: React.FC<Props> = ({ title, articles }) => {
  return (<TopicList title={title} articles={articles} />)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const articles = getTopicsFromFolder('decola')

  if (articles.length === 0) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      title: 'Decola Concursos',
      articles: getTopicsFromFolder('decola')
    }
  }
}

const getTopicsFromFolder = (folder: string): Array<{ title: string, url: string }> => {
  const pathFolder = path.resolve(process.cwd(), 'src', 'pages', folder)

  const makeTitle = (slug: string): string => {
    const words = slug.split('-')

    for (let i = 0; i < words.length; i++) {
      const word = words[i]
      words[i] = word.charAt(0).toUpperCase() + word.slice(1)
    }

    return words.join(' ') + '?'
  }
  return fs.readdirSync(pathFolder)
    .filter(item => /\.mdx$/g.test(item))
    .map(item => item.replace('.mdx', ''))
    .map(item => ({
      title: makeTitle(item),
      url: `/decola/${item}`
    }))
}
export default Decola
