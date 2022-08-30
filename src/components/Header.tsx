import React from 'react'

export const Header: React.FC = () => {
  return (<header className='mx-auto max-w-5xl relative'>
    <div className='md:px-4 md:py-6'>
      <div className='bg-white px-4 md:px-6 py-8 md:py-4 rounded-lg'>
        <div className='flex justify-between items-center'>
          <div className='md:ml-2'>
            Logo
          </div>
          <button className='hidden md:block py-2 px-8 bg-[#215D7D] font-bold uppercase text-white rounded-md mr-2'>
            Enviar solicitação
          </button>
        </div>
      </div>
    </div>
  </header>)
}
