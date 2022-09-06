import React from 'react'
import { Logo } from '@/components/logo'
import Link from 'next/link'
import { Footer } from '@/components/footer'

type ArticleModel = {
  title: string
  url: string
}
type Props = {
  title: string
  articles: ArticleModel[]
}

export const TopicList: React.FC<Props> = ({ title, articles }) => {
  return (
    <div>
      <header className='relative bg-gray-100 border-b border-slate-300'>
        <div className='max-w-5xl mx-auto '>
          <div className='px-8 md:px-6 py-6 flex justify-between'>
            <div id='logo' className='flex gap-4 items-center'>
              <Logo className={'w-6 h-6 md:w-8 md:h-8'} />
              <h2 className='text-xl text-primary-700 font-bold hidden md:block select-none'>Decola Concursos</h2>
            </div>
            <div className='md:hidden active:scale-95 animated'>
              <Link href='/solicitacao'>
                <div className='inline-block text-primary-700 font-bold  text-md rounded-md active:scale-[98%] hover:text-primary-500 cursor-pointer animated'>
                  Perguntar
                </div>
              </Link>
            </div>
            <div className='hidden md:block flex '>

              <Link href='/solicitacao'>
                <div className='inline-block ml-8 px-6 py-2 text-primary-700 font-bold hover:text-primary-500 text-md  bg-white rounded-md active:scale-[98%]  cursor-pointer animated'>
                  Enviar Pergunta
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main id='main'>
        <section id='main-list'>
          <div className='max-w-2xl mx-auto  '>
            <div className='flex justify-between items-end pt-12 pb-6 px-6'>
              <h3 className='text-2xl font-bold text-primary-700'>{title}</h3>
              <h5 className='text-slate-400'>{articles.length} artigos</h5>
            </div>
            <div className='bg-gray-100 rounded-md px-3 py-4 md:px-3 advanced-shadow'>
              <div className='grid grid-cols-1 gap-2'>
                {
                  articles.map((item) => <Article {...item} key={item.title + 'article'} />)
                }
              </div>

            </div>
            <Footer simple />
          </div>
        </section>
      </main>
    </div>
  )
}

export const Article: React.FC<ArticleModel> = ({ title, url }) => {
  return (
    <Link href={url}>
      <div className='hover:bg-white font-bold rounded-md px-6 py-4 cursor-pointer animated durantion-300 hover:text-primary-600'>
        {title}
      </div>
    </Link>
  )
}
