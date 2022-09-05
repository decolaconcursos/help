// Create By: Lenderson on 9/4/2022

import React, { useEffect, useState } from 'react'
import { Logo } from '@/components/Logo'
import { Menu } from '@/components/icons/menu'
import { Router } from 'next/router'
import clsx from 'clsx'
import { Dialog } from '@headlessui/react'
import Link from 'next/link'

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
      <div className='absolute inset-0 bg-gradient-to-b from-amber-50 to-transparent -z-10' />
      <div className='max-w-5xl mx-auto'>
        <div className='px-6 py-6 flex justify-between'>
          <div id='logo' className='flex gap-4 items-center'>
            <Logo className={'w-8 h-8'} />
            <h2 className='text-xl text-primary-700 font-bold hidden md:block'>Decola Concursos</h2>
          </div>
          <div className='md:hidden p-3 backdrop-blur-xl active:scale-95 animated'>
            <NavPopover />
          </div>
          <div className='hidden md:block'>
            Menu2
          </div>
        </div>
      </div>

    </header>
  )
}
