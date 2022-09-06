// Create By: Lenderson on 9/4/2022

import React, { useEffect, useState } from 'react'
import { Logo } from '@/components/logo'
import { Menu } from '@/components/icons/menu'
import { Router } from 'next/router'
import clsx from 'clsx'
import { Dialog } from '@headlessui/react'
import Link from 'next/link'

const navPropsList: Array<{ title: string, url: string}> = [
  {
    title: 'Nossos Serviços',
    url: '/decola'
  },
  {
    title: 'Concursos',
    url: '/concursos'
  }
]
type Props = {
}

type NavProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  display?: string
}

const NavPopover: React.FC<NavProps> = ({ display = 'md:hidden', className, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    const handleRouteChange = (): void => {
      setIsOpen(false)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [isOpen])

  return (
    <div className={clsx(className, display)} {...props}>
      <button
        type="button"
        className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600"
        onClick={() => setIsOpen(true)}
      >
        <span className="sr-only">Navegação</span>
        <Menu />
      </button>
      <Dialog
        as="div"
        className={clsx('fixed z-50 inset-0', display)}
        open={isOpen}
        onClose={setIsOpen}
      >
        <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
        <div className="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900">
          <button
            type="button"
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 "
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">Fechar Navagação</span>
            <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 overflow-visible" aria-hidden="true">
              <path
                d="M0 0L10 10M10 0L0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <ul className="space-y-6">
            <NavItems />
          </ul>
          <div className="mt-6 pt-6 border-t border-slate-200 ">
            Ops
          </div>
        </div>
      </Dialog>
    </div>
  )
}

const NavItems: React.FC = () => {
  return (
    <>
      <li>
        <Link href="/docs/installation">
          <a className="hover:text-primary-500">Docs</a>
        </Link>
      </li>
      <li>
        <a
          href="https://tailwindui.com/?ref=top"
          className="hover:text-primary-500"
        >
          Components
        </a>
      </li>
      <li>
        <Link href="/blog">
          <a className="hover:text-primary-500">Blog</a>
        </Link>
      </li>
      <li>
        <Link href="https://jobs.tailwindcss.com/?ref=top">
          <a className="hover:text-primary-500">
            Jobs
            <span className="ml-2 font-medium text-xs leading-5 rounded-full text-sky-600 bg-sky-400/10 px-2 py-0.5 ">
              New
            </span>
          </a>
        </Link>
      </li>
    </>
  )
}

export const HomeHeader: React.FC<Props> = () => {
  return (
    <header className='relative'>
      <div className='absolute inset-0 bg-gradient-to-b from-primary-100 to-transparent -z-10'>

      </div>
      <div className='max-w-5xl mx-auto'>
        <div className='px-6 py-6 md:py-6 flex justify-between'>
          <div id='logo' className='flex gap-4 items-center'>
            <Logo className={'w-8 h-8'} />
            <h2 className='text-xl text-primary-700 font-bold hidden md:block select-none'>Decola Concursos</h2>
          </div>
          <div className='md:hidden p-3 backdrop-blur-xl active:scale-95 animated'>
            <NavPopover />
          </div>
          <div className='hidden md:block flex '>
            {
              navPropsList.map(item => {
                return (<Link href={item.url} key={item.title + item.url}>
                  <div key={item.title + 'Nav'} className='inline-block ml-6 cursor-pointer hover:text-primary-600'>
                    {item.title}
                  </div>
                </Link>)
              })
            }
            <Link href='/solicitacao'>
              <div className='inline-block ml-8 px-6 py-2 text-primary-700 font-bold bg-slate-50 text-lg hover:bg-white rounded-md active:scale-[98%]  advanced-shadow   cursor-pointer animated'>
                Enviar Pergunta
              </div>
            </Link>
          </div>
        </div>
        <div className='px-6 py-6 text-center '>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold'> <span className='wave'>👋</span> Olá</h2>
            <p className='text-4xl font-extrabold text-primary-700'>Como podemos te ajudar?</p>
            <p className={'text-sm text-slate-400'}>Loremzinho de boas, esle to aprdne minst farez isto</p>
          </div>

          <div className='relative select-none overflow-hidden advanced-shadow max-w-md mx-auto px-8 py-3 rounded-md mt-6 text-left bg-white flex justify-between group'>
            <div className='absolute inset-0 group-active:bg-primary-500/10' />
            <div className='text-slate-300'>Pesquisa rápida...</div>
            <svg width="24" height="24" className='fill-primary-600' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.4516 20.7984L17.8407 15.1875C19.1166 13.2933 19.7461 10.9266 19.4091 8.40469C18.8344 4.11516 15.3188 0.624374 11.025 0.0807647C4.64113 -0.727032 -0.726994 4.64109 0.0808499 11.025C0.6246 15.3206 4.11585 18.8391 8.40585 19.4109C10.9277 19.7479 13.2949 19.1186 15.1887 17.8425L20.7996 23.4534C21.5318 24.1856 22.7191 24.1856 23.4513 23.4534C24.1828 22.7203 24.1828 21.5297 23.4516 20.7984ZM3.70785 9.75C3.70785 6.44156 6.39941 3.75 9.70785 3.75C13.0163 3.75 15.7078 6.44156 15.7078 9.75C15.7078 13.0584 13.0163 15.75 9.70785 15.75C6.39941 15.75 3.70785 13.0594 3.70785 9.75Z" />
            </svg>

          </div>
          <div className='text-slate-500 mt-2'>
            <p className='font-medium scale-75 text-center select-none'> Pressione <Key>CTRL</Key> ou <Key>⌘</Key> + <Key>K</Key> para mais </p>
          </div>
        </div>
      </div>
    </header>
  )
}

const Key: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (<span className='inline-block mx-1 px-2 py font-mono font-semibold border-2 rounded-md text-center bg-slate-50 [shadow:_inset_0_0_0_white]'>
    {children}
  </span>)
}
