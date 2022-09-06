import React from 'react'
import { Footer } from '@/components/footer'
import { FollowUs } from '@/components/home/follow-us'
import { Newsletter } from '@/components/home/newsletter'
import { ForcasArmadas } from '@/components/home/forcas-armadas'
import { NossosServicos } from '@/components/home/nossos-servicos'
import { HomeHeader } from '@/components/home/home-header'

const Home: React.FC = () => {
  return (
    <>

      <HomeHeader/>
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
