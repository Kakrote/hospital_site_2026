import React from 'react'
import data from '@/data/content.json'
import * as Icons from 'lucide-react'

const Services = () => {
  const services = data.ourServices

  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ className: string }>
    return IconComponent ? <IconComponent className="h-8 w-8" /> : null
  }

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#ffffff] via-[#ffffff]/20 to-[#ffffff]/40 py-16 sm:py-24">
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#1566a8]/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#d8a519]/5 blur-3xl" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1566a8]">
              What We Offer
            </p>
            <h2 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
              Comprehensive Healthcare Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
              State-of-the-art facilities and expert care across a wide spectrum of medical specializations.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={index}
                className="group relative rounded-3xl border border-slate-100 bg-white p-8 shadow-md transition-all duration-500 hover:border-[#1566a8]/50 hover:shadow-2xl hover:shadow-[#1566a8]/20 sm:p-10"
              >
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-[#1566a8]/0 to-[#d8a519]/0 opacity-0 transition-opacity duration-500 group-hover:from-[#1566a8]/5 group-hover:to-[#d8a519]/5 group-hover:opacity-100" />
                
                <div className="relative flex flex-col gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-[#1566a8] to-[#1566a8]/80 text-white shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:shadow-xl group-hover:shadow-[#1566a8]/40">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="text-xl font-semibold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-[#1566a8]">
                    {service.name}
                  </h3>
                  <div className="h-1 w-0 rounded-full bg-[#d8a519] transition-all duration-500 group-hover:w-12" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
