import React from 'react'
import HeroSection from './components/heroSection'
import About from './components/about'
import DirectorsMessage from './components/directorMessage'
import VissionMission from '@/components/VissionMission'

const page = () => {
  return (
   <div>
    <HeroSection />
    <About />
    <DirectorsMessage />
    <VissionMission/>
   </div>
  )
}

export default page