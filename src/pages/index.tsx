import React, { useState } from 'react'
import { Header } from '@/components/Header'

const Home: React.FC = () => {
  return (
    <div className='relative min-h-screen'>
      <div className='absolute inset-0 bg-gradient-to-b from-[#f9f5f1] to-white z-0' />
      <Header />
      <Hero />
    </div>
  )
}

const Hero: React.FC = () => {
  const [,setFocus] = useState(false)

  return (<div className='max-w-5xl mx-auto relative'>
    <div className='px-4 md:py-6 space-y-4'>
      <div className='text-center'>
        <h4 className='text-3xl font-semibold'><span className='wave'>👋</span> Olá</h4>
        <h1 className='text-4xl font-extrabold'>Como podemos te ajudar?</h1>
        <p className='mt-2 font-semibold '>Loremzinho de boas, esle to aprdne minst farez isto</p>
      </div>
      <div className='flex flex-col gap-4 items-center w-full'>

        <input type="text" onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} className='w-full max-w-xl px-6 py-3 rounded-lg advanced-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#694D30] animated'/>

        <div className='text-[#694D30]/80 font-semibold opacity-60 text-xs'>
          Pressione <code className='snippet'>CTRL</code> ou <code className='snippet'>⌘</code> + <code className='snippet'>K</code> para mais
        </div>
      </div>
      <div className='relative '>

      </div>
    </div>

  </div>)
}
export default Home
