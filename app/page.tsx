import React from 'react'
import HeroSlider from '@/components/HeroSlider'
import About from '@/components/About'
import DirectorsMessage from '@/components/DirectorsMessage'
import VissionMission from '@/components/VissionMission'
import Services from '@/components/Services'
import BloggerPosts from '@/components/uu-blogs'

const page = () => {
  return (
    <div>
      <HeroSlider />
      <About/>
      <DirectorsMessage />
      <VissionMission/>
      <Services/>
      <BloggerPosts />
    </div>
  )
}

export default page