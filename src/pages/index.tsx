import React from 'react'
import { Footer } from '@/components/Footer'
import { FollowUs } from '@/components/home/FollowUs'

const Home: React.FC = () => {
  return (
    <>
      Home
      <main id='app'>
        <FollowUs />
      </main>
      <Footer />
    </>
  )
}

export default Home
