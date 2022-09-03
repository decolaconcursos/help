// Create By: Lenderson on 9/3/2022

import React from 'react'
import { Logo } from '@/components/Logo'
import Link from 'next/link'

type Props = {

}

type FooterNavType = {
  title: string
  url: string
}

const footerNav: FooterNavType[] = [
  {
    title: 'Direitos Autorias',
    url: '/direitos-autorias'
  },
  {
    title: 'Termos de uso',
    url: '/temos-de-uso'
  },
  {
    title: 'Políticas de privacidade',
    url: '/politicas-de-privacidade'
  }
]

export const Footer: React.FC<Props> = () => {
  return (<>
    <footer className='relative'>
      <div className='max-w-5xl mx-auto flex items-center flex-col gap-3 py-12 px-4 border-t-[2px] border-gray-200 border-solid'>
        <div id='logo' className='flex gap-4 items-center'>
          <Logo />
          <h2 className='text-xl text-primary-700 font-bold'>Decola Concuroso</h2>
        </div>
        <p className='text-gray-300'>Copyright © 2022, Todos os direitos reservados</p>
        <div className='divide-x-2 flex mt-12 divide-gray-200'>
          {
            footerNav.map((item) => {
              return (
                <Link key={item.title} href={item.url} passHref>
                  <button className={'px-6 font-medium text-primary-700 hover:text-primary-400 animated'}>
                    {item.title}
                  </button>
                </Link>)
            })
          }
        </div>
      </div>
    </footer>
  </>)
}
