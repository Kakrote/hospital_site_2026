import React from 'react'
import Image from 'next/image'
import data from '@/data/content.json'

const DirectorsMessage = () => {
    const director = data.directorsMessage

    return (
        <section className="py-20 md:py-28 bg-white"
            style={{
                backgroundImage: `url('/assets/backgrounds/pattern-11.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
                    <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                        <div
                            className="rounded-xl p-8 flex items-center justify-center"

                        >
                            <div className="rounded-full overflow-hidden w-48 h-48 md:w-90 md:h-90 shadow-xl ring-4 ring-white/90">
                                <Image
                                    src={director.image}
                                    alt={director.name}
                                    width={480}
                                    height={480}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3">
                        <h3 className="text-base font-semibold text-[#1566a8]">Director's Message</h3>
                        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">{director.name}</h2>
                        <p className="mt-4 text-lg md:text-xl text-slate-700 leading-8">{director.message}</p>
                        <p className="mt-6 text-sm md:text-base text-slate-500">{director.designation}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DirectorsMessage