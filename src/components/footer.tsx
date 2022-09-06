// Create By: Lenderson on 9/3/2022

import React from 'react'
import { Logo } from '@/components/logo'
import Link from 'next/link'
import clsx from 'clsx'

type Props = {
  simple?: boolean
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

export const Footer: React.FC<Props> = ({ simple }) => {
  return (<>
    <footer className='relative'>
      <div className={clsx(!(simple ?? false) && ' py-12', 'max-w-5xl mx-auto flex items-center flex-col gap-3 px-4 border-t-[2px] border-gray-200 border-solid')}>
        {
          !(simple ?? false) && <>
            <div id='logo' className='flex gap-4 items-center'>
              <Logo />
              <h2 className='text-xl text-primary-700 font-bold'>Decola Concuroso</h2>
            </div>
            <p className='text-gray-300'>Copyright © 2022, Todos os direitos reservados</p>
          </>
        }
        <div className='divide-x-2 flex mt-12 divide-gray-200 pb-12 md:pb-0'>
          {
            footerNav.map((item) => {
              return (
                <Link key={item.title} href={item.url} passHref>
                  <button className={'px-6 text-xs md:text-md  font-medium text-primary-700 hover:text-primary-400 animated'}>
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
