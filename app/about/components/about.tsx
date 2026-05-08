import React from 'react'
import content from '@/data/content.json'
import { Bed, Clock, Heart, Microscope, Scissors, Users } from 'lucide-react'

const about = () => {
    const getFacilityIcon = (facility: string) => {
        if (facility.includes('Emergency')) return Clock
        if (facility.includes('ICU') || facility.includes('Critical')) return Heart
        if (facility.includes('Operation Theatre')) return Scissors
        if (facility.includes('OPD') || facility.includes('IPD')) return Users
        if (facility.includes('Diagnostic') || facility.includes('Pathology')) return Microscope
        if (facility.includes('Beds') || facility.includes('Bed')) return Bed

        return Bed
    }

    return (
        <section className='relative overflow-hidden bg-slate-50 py-16 md:py-24'>
            <div className='absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#1566a8]/10 to-transparent' />
            <div className='container relative mx-auto px-4 md:px-6'>
                <div className='lg:items-center'>
                    <div className='space-y-6'>
                      
                        <div className='space-y-4'>
                            <h2 className=' font-figtree text-transparent text-stroke-black  bg-clip-text text-3xl font-bold leading-tight text-slate-900 md:text-5xl'>
                                {content.aboutPage.aboutHospital.title}
                            </h2>
                            <p className=' text-base leading-8 text-slate-600 md:text-lg text-justify'>
                                {content.aboutPage.aboutHospital.description}
                            </p>
                        </div>

                        <div className='space-y-4'>
                            {/* <h3 className='text-xl font-semibold text-[#1155bb] md:text-3xl text-center'>Facilities</h3> */}
                            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                                {content.aboutPage.facilities.map((facility) => {
                                    const Icon = getFacilityIcon(facility)

                                    return (
                                        <div key={facility} className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'>
                                            <div className='flex items-center gap-4'>
                                                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[#e6f6ff]'>
                                                    <Icon className='h-6 w-6 text-[#1566a8]' aria-hidden />
                                                </div>
                                                <p className='text-base font-semibold leading-6 text-slate-800'>{facility}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default about