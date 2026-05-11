import React from 'react'
import content from "@/data/content.json"

type HeroSectionContent={
    title:string
    // description:string
}


const heroSection = ({data}:{data:HeroSectionContent}) => {
  return (
    <section className='bg-gradient-to-r from-[#0e1d4e] via-[#2f4155] to-[#18479e] py-20 text-[#d6d61d]'>
      <div className='container mx-auto text-center text-3xl  py-4 '>
        <h1 className='container mx-auto  font-bold font-figtree text-stroke text-transparent'> {data.title} </h1>
      </div>

      {/* <div className='relative container mx-auto max-w-4xl  rounded-2xl bg-white'>
        <div className='absolute -inset-4 rounded-[2rem] ' />
        <div className='relative overflow-hidden rounded-[2rem] border border-white/70 bg-white '>
          <div className='grid gap-4 border-t border-slate-100 p-2 sm:grid-cols-2'>
            <div className='rounded-2xl bg-slate-50 border p-4'>
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-[#1566a8]'>Patient-first</p>
              <p className='mt-2 text-sm leading-6 text-slate-600'>Modern facilities and attentive care designed around every patient.</p>
            </div>
            <div className='rounded-2xl bg-slate-50 p-4 border'>
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-[#1566a8]'>Quality care</p>
              <p className='mt-2 text-sm leading-6 text-slate-600'>Standards aligned with national and international expectations.</p>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default heroSection