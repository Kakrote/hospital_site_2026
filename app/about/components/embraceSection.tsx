import React from 'react'
import content from '@/data/content.json'
import Image from 'next/image'

const EmbraceSection = () => {
  return (
        <section
            className="relative overflow-hidden bg-slate-50 py-12"
            style={{
                backgroundImage: ` url('/assets/backgrounds/pattern-11.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            {/* <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#1566a8]/10 blur-3xl" /> */}
            {/* <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-[#d6d61d]/15 blur-3xl" /> */}

            <div className='container relative mx-auto grid items-center gap-12 px-4 md:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16'>
                {/* left Image section  */}
                <div className='relative mx-auto w-full max-w-[560px]'>
                    {/* <div className='absolute -left-4 -top-4 h-24 w-24 rounded-3xl border border-[#1566a8]/20 bg-white/80 backdrop-blur-sm' /> */}
                    <div className='absolute -bottom-4 -right-4 h-24 w-24 rounded-3xl bg-[#1566a8]/10' />
                    <div className='relative overflow-hidden  p-3'>
                        <div className='relative aspect-[5/5] overflow-hidden rounded-[1.5rem]'>
                            <Image
                                src={content.aboutPage.embraceSection.image}
                                alt={content.aboutPage.embraceSection.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 560px"
                                priority={false}
                            />
                            {/* <div className='absolute inset-0 bg-gradient-to-t from-slate-950/40 via-slate-950/0 to-transparent' /> */}
                            
                        </div>
                    </div>
                </div>

                {/* right content section  */}
                <div className='mx-auto w-full max-w-3xl'>
                   
                    <h2 className='mt-5 text-3xl font-bold leading-tight text-slate-900 md:text-5xl'>
                        <span className='bg-gradient-to-r from-slate-900 via-[#1566a8] to-[#0f766e] bg-clip-text text-transparent'>
                            {content.aboutPage.embraceSection.title}
                        </span>
                    </h2>
                  

                    <div className='mt-8 grid gap-4 sm:flex flex-wrap'>
                        {content.aboutPage.embraceSection.points.map((point, index) => (
                            <div
                                key={index}
                                className='group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1566a8]/25 hover:shadow-xl'
                            >
                                <div className='flex items-start gap-4'>
                                    <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e6f6ff] text-sm font-bold text-[#1566a8] ring-8 ring-[#e6f6ff]/40'>
                                        {index + 1}
                                    </div>
                                    <p className='pt-1 text-sm leading-7 text-slate-700 md:text-base'>{point}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
  )
}

export default EmbraceSection