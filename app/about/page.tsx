import React from 'react'
import HeroSection from './components/heroSection'
import About from './components/about'
import DirectorsMessage from './components/directorMessage'
import VissionMission from '@/components/VissionMission'
// import embraceSection from './components/embraceSection'
import EmbraceSection from './components/embraceSection'
import FAQ from '@/components/FAQ'

const page = () => {
  return (
   <div>
    <HeroSection />
    <About />
    <DirectorsMessage />
    <VissionMission/>
    <EmbraceSection/>
    <FAQ/>
   </div>
  )
}

export default page