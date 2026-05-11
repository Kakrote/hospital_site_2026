import React from 'react'
import HeroSection from './heroSection'
import DoctorCard from './components/doctorsCard'
import content from "@/data/content.json"

interface Doctor {
  name: string;
  specialization: string;
  experience: string;
  image: string;
}

const page = () => {
  const doctors = content.doctorsPage.doctorList as Doctor[];

  return (
    <div>
      <HeroSection data={content.doctorsPage} />
      
      {/* Doctors Grid Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {content.doctorsPage.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of experienced and dedicated medical professionals is committed to providing you with the best healthcare services.
            </p>
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <DoctorCard key={index} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default page