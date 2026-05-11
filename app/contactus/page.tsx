import React from 'react'
import HeroSection from "@/app/doctors/heroSection"
import content from "@/data/content.json"
import LocateUsMapSection from './components/map'
import ContactDetails from './components/contactDetails'

const page = () => {
  return (
    <div>
      <HeroSection data={content.contactPage} />
      <LocateUsMapSection />
      <ContactDetails 
        logo={content.header.logo}
        phone={content.header.contact}
        email={content.contactPage.contactDetails.email}
        address={content.contactPage.contactDetails.address}
      />

    </div>
  )
}

export default page