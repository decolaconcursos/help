// Create By: Lenderson on 9/3/2022

import React from 'react'
import { NewsletterForm } from '@/components/newsletter-form'

type Props = {
}

export const Newsletter: React.FC<Props> = () => {
  return (<section id='newsletter'>
    <div className='max-w-7xl relative px-20 py-20 mx-auto rounded-3xl overflow-hidden shadow-2xl outline-1'>
      <div className='absolute inset-0 bg-gradient-to-tr from-primary-900 to-primary-700'></div>
      <div className='flex '>
        <div className='w-2/3 relative max-w-lg '>
          <h1 className='text-5xl font-extrabold text-white'>Cadastre-se na nossa Newsletter</h1>
          <p className='mt-2 text-slate-300 '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className='max-w-lg relative mt-8'>
            <NewsletterForm />
            <p className='text-slate-300'>Receba um presente especial ao se cadastrar!</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </section>)
}
