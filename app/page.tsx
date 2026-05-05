import React from 'react'
import HeroSlider from '@/components/HeroSlider'
import About from '@/components/About'
import VissionMission from '@/components/VissionMission'
import Services from '@/components/Services'

const page = () => {
  return (
    <div>
      <HeroSlider />
      <About/>
      <VissionMission/>
      <Services/>
    </div>
  )
}

export default page