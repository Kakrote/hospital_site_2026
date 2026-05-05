import React from 'react'
import data from '@/data/content.json'

const VissionMission = () => {
    const visionItems = data.vissionMission.vision
    const missionItems = data.vissionMission.mission

  return (
        <section className="relative bg-cover bg-center py-16 sm:py-24 min-h-[90vh] flex items-center" style={{ backgroundImage: 'url(/assets/images/uu-building.png)' }}>
            <div className="absolute inset-0 bg-[#0a0a0ab8] backdrop-blur-sm" />
            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12 text-center lg:text-left">
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6d61d]">
                          Our Foundation
                        </p>
                        <h2 className="mt-4 text-4xl font-bold lg:text-6xl text-white">
                            Vision & Mission
                        </h2>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
                          Guiding principles that define who we are and what we stand for in healthcare.
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2 items-stretch">
                        <article className="group rounded-3xl min-h-130 bg-white p-8 sm:p-12 shadow-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#1566a8]/30 hover:-translate-y-2">
                            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-white/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            <div className="relative flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-[#1566a8] to-[#1566a8]/80 text-base font-bold text-white shadow-lg">
                                        01
                                    </span>
                                    <h3 className="text-3xl font-bold text-[#1566a8]">Vision</h3>
                                </div>

                                <ul className="space-y-5 text-slate-700 flex-1">
                                    {visionItems.map((item, index) => (
                                        <li key={index} className="flex gap-4 leading-7">
                                            <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#1566a8]" />
                                            <span className="text-base font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <div className="mt-8 h-1 w-16 rounded-full bg-linear-to-r from-[#1566a8] to-[#d6d61d]" />
                            </div>
                        </article>

                        <article className="group rounded-3xl min-h-130 bg-linear-to-br from-[#1566a8] to-[#1566a8]/90 p-8 sm:p-12 shadow-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#d6d61d]/40 hover:-translate-y-2 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,214,29,0.15),transparent_50%)]" />
                            <div className="relative flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-base font-bold text-[#d6d61d] shadow-lg">
                                        02
                                    </span>
                                    <h3 className="text-3xl font-bold text-[#d6d61d]">Mission</h3>
                                </div>

                                <ul className="space-y-5 text-white flex-1">
                                    {missionItems.map((item, index) => (
                                        <li key={index} className="flex gap-4 leading-7">
                                            <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#d6d61d]" />
                                            <span className="text-base font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <div className="mt-8 h-1 w-16 rounded-full bg-linear-to-r from-[#d6d61d] to-white" />
                            </div>
                        </article>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default VissionMission