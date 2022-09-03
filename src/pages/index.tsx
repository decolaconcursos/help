import React from 'react'
import { Footer } from '@/components/Footer'
import { FollowUs } from '@/components/home/FollowUs'
import { Newsletter } from '@/components/home/newsletter'
import { ForcasArmadas } from '@/components/home/forcas-armadas'

const Home: React.FC = () => {
  return (
    <>
      Home
      <main id='app'>
        <ForcasArmadas />
        <Newsletter />
        <FollowUs />
      </main>
      <Footer />
    </>
  )
}

export default Home
