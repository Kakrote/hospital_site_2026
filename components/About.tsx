import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import data from '@/data/content.json'

const About = () => {
    const about = data.about || {
        title: 'About Us',
        description:
            'We are committed to delivering high-quality, compassionate healthcare with modern facilities and an experienced team of specialists.',
    }

    return (
        <section className="bg-[#adadad44] py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">

                    {/* Left: image / decorative */}
                    <div className="relative order-2 lg:order-1">
                        <div className="overflow-hidden rounded-2xl shadow-xl">
                            <Image
                                src={data.about.image || '/assets/images/logo.svg'}
                                alt={about.title}
                                width={960}
                                height={540}
                                className="w-full h-72 object-cover sm:h-96 lg:h-105"
                                priority
                            />
                        </div>

                        {/* <div className="-mt-12 ml-4 hidden sm:block container mx-auto">
                            <div className="flex gap-3">
                                <div className="rounded-xl bg-slate-50 p-4 shadow-md">
                                    <h4 className="text-xl font-semibold">24/7 Emergency</h4>
                                    <p className="text-sm text-slate-600">Rapid response & trauma care</p>
                                </div>
                                <div className="rounded-xl bg-slate-50 p-4 shadow-md">
                                    <h4 className="text-xl font-semibold">Certified Doctors</h4>
                                    <p className="text-sm text-slate-600">Experienced multi-speciality team</p>
                                </div>
                            </div>
                        </div> */}
                    </div>


                    {/* Right: content */}
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl font-extrabold text-[#6bc533] sm:text-4xl">{about.title}</h2>
                        <p className="mt-4 text-lg text-slate-700 text-justify">{about.description}</p>

                        {/* <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-100 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold">Patient-first Care</h3>
                <p className="mt-2 text-sm text-slate-600">Individualized treatment plans and compassionate staff.</p>
              </div>
              <div className="rounded-lg border border-slate-100 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold">Modern Facilities</h3>
                <p className="mt-2 text-sm text-slate-600">State-of-the-art equipment across all departments.</p>
              </div>
            </div> */}

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800"
                            >
                                Book an Appointment
                            </Link>

                            <div className="mt-2 text-sm text-slate-600 sm:mt-0 sm:ml-4">
                                Or call us: <span className="font-medium text-slate-800">{data.header.contact?.[0]}</span>
                            </div>
                        </div>

                        <div className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-3">
                            <div className="text-center shadow-[0px_0px_25px_0px] shadow-[#234dc2b0] rounded-xl p-2 ">
                                <div className="text-2xl font-bold text-slate-900">20+</div>
                                <div className="text-sm text-slate-600">Years</div>
                            </div>
                            <div className="text-center shadow-[0px_0px_25px_0px] shadow-[#234dc2b0] rounded-xl p-2">
                                <div className="text-2xl font-bold text-slate-900">300</div>
                                <div className="text-sm text-slate-600">Bedded Multispeciality care</div>
                            </div>
                            <div className="text-center shadow-[0px_0px_25px_0px] shadow-[#234dc2b0] rounded-xl p-2">
                                <div className="text-2xl font-bold text-slate-900">24/7</div>
                                <div className="text-sm text-slate-600">Emergency</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About