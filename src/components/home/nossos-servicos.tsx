// Create By: Lenderson on 9/3/2022

import React from 'react'
import { SectionTag } from '@/components/section-tag'
import Link from 'next/link'

type Props = {
  children?: React.ReactNode
}

type CategoriaProp = {
  title: string
  url: string
}
const categoriasList: CategoriaProp[] = [
  {
    title: 'Cursos',
    url: '/categoria/cursos'
  }, {
    title: 'Cursos',
    url: '/categoria/cursos'
  }, {
    title: 'Cursos',
    url: '/categoria/cursos'
  }, {
    title: 'Cursos',
    url: '/categoria/cursos'
  }, {
    title: 'Cursos',
    url: '/categoria/cursos'
  }, {
    title: 'Cursos',
    url: '/categoria/cursos'
  }, {
    title: 'Cursos',
    url: '/categoria/cursos'
  }, {
    title: 'Cursos',
    url: '/categoria/cursos'
  }, {
    title: 'Cursos',
    url: '/categoria/cursos'
  }
]

export const NossosServicos: React.FC<Props> = ({ children }) => {
  return (<section id='nossos-servicos'>
    <div className='max-w-5xl px-4 py-12 mx-auto mb-12'>
      <div className='flex flex-col items-center text-center'>
        <SectionTag >Decola concursos</SectionTag>
        <h1 className='mt-4 text-4xl font-bold'>
          Sobre nossos serviços
        </h1>
        <div className={'mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full'}>

          {categoriasList.map((item) => {
            return <Link href={item.url} key={item.title}><Categoria word={item.title}/></Link>
          })}
        </div>
      </div>
    </div>

  </section>)
}

const Categoria: React.FC<{word: string}> = ({ word }) => {
  const getFirstLetter = (word: string): string => {
    return word[0].toUpperCase()
  }
  return (<div className='w-full cursor-pointer active:scale-[98%] hover:shadow group animated hover:bg-slate-200 bg-slate-100 p-2 rounded-md flex gap-4 items-center text-2xl font-bold'>
    <div className={'text-4xl font-extrabold p-4 w-16 h-16 leading-none flex justify-center items-center text-primary-500 animated  bg-white rounded-md group-hover:bg-primary-500 group-hover:text-white'}>
      {getFirstLetter(word)}
    </div>
    <h3 className='text-slate-500 group-hover:text-slate-800 '>
    {word}
    </h3>
  </div>)
}
