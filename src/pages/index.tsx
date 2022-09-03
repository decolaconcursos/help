import React from 'react'
import { Footer } from '@/components/Footer'
import { FollowUs } from '@/components/home/FollowUs'
import { Newsletter } from '@/components/home/newsletter'

const Home: React.FC = () => {
  return (
    <>
      Home
      <main id='app'>
        <Newsletter />
        <FollowUs />
      </main>
      <Footer />
    </>
  )
}

export default Home
