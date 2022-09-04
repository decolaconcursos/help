import React from 'react'
import { Footer } from '@/components/Footer'
import { FollowUs } from '@/components/home/follow-us'
import { Newsletter } from '@/components/home/newsletter'
import { ForcasArmadas } from '@/components/home/forcas-armadas'
import { NossosServicos } from '@/components/home/nossos-servicos'

const Home: React.FC = () => {
  return (
    <>
      Home
      <main id='app'>
        <NossosServicos />
        <ForcasArmadas />
        <Newsletter />
        <FollowUs />
      </main>
      <Footer />
    </>
  )
}

export default Home
