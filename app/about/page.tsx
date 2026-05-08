import React from 'react'
import HeroSection from './components/heroSection'
import About from './components/about'
import DirectorsMessage from './components/directorMessage'
import VissionMission from '@/components/VissionMission'
// import embraceSection from './components/embraceSection'
import EmbraceSection from './components/embraceSection'

const page = () => {
  return (
   <div>
    <HeroSection />
    <About />
    <DirectorsMessage />
    <VissionMission/>
    <EmbraceSection/>
   </div>
  )
}

export default page