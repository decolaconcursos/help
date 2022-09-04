// Create By: Lenderson on 9/3/2022

import React from 'react'
import { SectionTag } from '@/components/SectionTag'
import clsx from 'clsx'
import Image from 'next/image'

type Props = {
  children?: React.ReactNode
}

type Card = {
  title: string
  url: string
  img?: string
  locked?: boolean
  content?: string
}

const cardsList: Card[] = [
  {
    title: 'Exercito',
    url: 'marinha',
    img: '/images/exercito.png',
    locked: true,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
  }, {
    title: 'Marinha',
    url: 'marinha',
    img: '/images/marinha.png',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
  }, {
    title: 'Aeronautica',
    url: 'marinha',
    img: '/images/aeronautica.png',
    locked: true,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
  }

]

export const ForcasArmadas: React.FC<Props> = ({ children }) => {
  return (<section id='ffaa'>
    <div className='max-w-5xl px-4 py-12 mx-auto mb-12'>
      <div className='flex flex-col items-center text-center'>
        <SectionTag >SEU CONCURSO</SectionTag>
        <h1 className='mt-4 text-4xl font-bold'>
          De qual força é o seu concurso?
        </h1>
        <div className={'mt-12 flex  divide-x-2 w-full'}>
          {cardsList.map((item) => <FACard {...item} />)}
        </div>
      </div>
    </div>
  </section>)
}

type CardProps = Card

export const FACard: React.FC<CardProps> = ({ content, locked, url, img, title }) => {
  return (
  <div className={clsx('px-8 flex-1 group ', (locked ?? false) ? 'cursor-not-allowed select-none' : 'cursor-pointer')}>
    <div className='relative flex justify-center '>

    </div>
    <div className={clsx(!(locked ?? false) && 'shadow-md group-hover:shadow-lg', 'translate-y-0 animated h-44 bg-primary-500 rounded-xl relative overflow-hidden flex')}>
    {
      (locked ?? false) && (<div className='absolute z-10 px-3 py-1 text-xs font-bold text-yellow-600 uppercase border-yellow-400 rounded-full opacity-[50%] group-hover:opacity-[100%] duration-500 border-px left-2 top-2 bg-yellow-50 backdrop-blur-md w-fit animated '>
      Em breve!
      </div>)
    }
      <Image className='bg-cover' layout='fill' objectFit='cover' alt={title} src={img ?? ''} />
      {
        (locked ?? false) && <>
          <div className='relative z-50 flex items-center justify-center flex-1 h-auto'>
            <div className='grid w-20 h-20 rounded-lg bg-white/40 place-content-center backdrop-blur-md'>
              <svg width="40" height="46" viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.0482 20.0892L32.6386 20.1701V12.9751C32.6386 5.83313 26.948 0.0240479 19.9518 0.0240479C12.9556 0.0240479 7.26507 5.83313 7.26507 12.9751V20.1701L5.85543 20.0892C2.74101 20.0892 0.216873 22.6659 0.216873 25.8452V40.2353C0.216873 43.4137 2.74101 45.9913 5.85543 45.9913H34.0482C37.1626 45.9913 39.6868 43.4137 39.6868 40.2353V25.8452C39.6868 22.7513 37.1582 20.0892 34.0482 20.0892ZM22.7711 34.4792C22.7711 36.0685 21.5086 37.3573 19.9518 37.3573C18.395 37.3573 17.1325 36.0685 17.1325 34.4792V31.6012C17.1325 30.012 18.395 28.7232 19.9518 28.7232C21.5086 28.7232 22.7711 30.012 22.7711 31.6012V34.4792ZM27 20.1701H12.9036V12.9751C12.9036 9.00704 16.0665 5.78007 19.9518 5.78007C23.8371 5.78007 27 9.00704 27 12.9751V20.1701Z" fill="white"/>
              </svg>
            </div>

          </div>
          <div className={'bg-black/40 absolute inset-0 backdrop-blur-sm'}></div>
        </>

      }
    </div>

    <div className={clsx('animated', (locked ?? false) ? 'text-slate-300' : 'group-hover:text-primary-600')}>
      <h2 className='mt-8 text-2xl font-bold '>
        {title}
      </h2>
      <p className={clsx('mt-2 text-sm text-slate-500 ', (locked ?? false) && 'text-slate-300')}>
        {content}
      </p>
    </div>

  </div>)
}
