import React from 'react'
import { Youtube } from '@/components/icons/social-media/youtube'
import { Instagram } from '@/components/icons/social-media/instagram'
import { Tiktok } from '@/components/icons/social-media/tiktok'
import { SectionTag } from '@/components/section-tag'

type Props = {

}

export const FollowUs: React.FC<Props> = () => {
  return (
    <section id='follow-us' className='relative md:py-8'>

      <div className='max-w-5xl mx-auto py-16 text-center flex flex-col px-4 items-center'>
        <SectionTag color>SAIBA MAIS</SectionTag>
        <h1 className='font-bold text-4xl mt-4'>
          Nos siga nas Redes Sociais
        </h1>
        <p className='max-w-2xl mx-auto mt-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <div className='flex gap-12 mt-12'>
          <Youtube />
          <Instagram />
          <Tiktok />
        </div>
      </div>
    </section>
  )
}
