'use client'

import React, { useState } from 'react'
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react'
import data from '@/data/content.json'

const FAQ = () => {
    const faqs = data.faq || []
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="py-16 md:py-28 bg-linear-to-br from-slate-50 to-blue-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 mx-auto">
                    <div>

                        {/* Header */}
                        <div className="mb-16 text-center">
                          
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Everything you need to know about our hospital services, facilities, and how we care for you.
                            </p>
                        </div>

                        {/* FAQ Items */}
                        <div className="space-y-3">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="group relative"
                                >
                                    <div className="absolute inset-0 bg-linear-to-r from-[#1566a8]/10 to-[#d6d61d]/10 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />

                                    <div
                                        className={`relative border rounded-xl transition-all duration-300 ${openIndex === index
                                            ? 'border-[#1566a8] bg-white shadow-lg'
                                            : 'border-slate-200 bg-white hover:border-[#1566a8]/30 hover:shadow-md'
                                            }`}
                                    >
                                        <button
                                            onClick={() => toggleAccordion(index)}
                                            className="w-full px-6 md:px-8 py-5 flex items-center justify-between text-left group/btn"
                                        >
                                            <div className="flex items-center gap-4 flex-1">
                                                <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index
                                                    ? 'bg-[#1566a8] text-white'
                                                    : 'bg-slate-100 text-[#1566a8] group-hover/btn:bg-[#1566a8]/10'
                                                    }`}>
                                                    <HelpCircle className="w-5 h-5" />
                                                </div>
                                                <h3 className={`font-semibold transition-colors duration-300 ${openIndex === index
                                                    ? 'text-[#1566a8] text-lg'
                                                    : 'text-slate-900 text-base md:text-lg group-hover/btn:text-[#1566a8]'
                                                    }`}>
                                                    {faq.question}
                                                </h3>
                                            </div>
                                            <ChevronDown
                                                className={`w-5 h-5 text-[#1566a8] transition-transform duration-300 shrink-0 ml-4 ${openIndex === index ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </button>

                                        {openIndex === index && (
                                            <div className="px-6 md:px-8 pb-5 border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-300">
                                                <p className="text-slate-700 leading-8 text-base md:text-lg">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className='h-full flex justify-center items-center'>

                        <div className="mt-16 p-8 md:p-10 rounded-2xl bg-linear-to-r from-[#1566a8] to-[#1566a8]/80 text-white text-center h-fit">
                            <h3 className="text-2xl md:text-3xl font-bold mb-3">
                                Still have questions?
                            </h3>
                            <p className="text-white/90 mb-6 text-lg">
                                Our friendly team is here to help. Contact us anytime!
                            </p>
                            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                                <a href="tel:01352770380" className="px-6 py-3 bg-white text-[#1566a8] rounded-lg font-semibold hover:bg-slate-50 transition-colors">
                                    Call Us: 0135-2770380
                                </a>
                                <a href="tel:18008914232" className="px-6 py-3 bg-[#d6d61d] text-slate-900 rounded-lg font-semibold hover:bg-[#d6d61d]/90 transition-colors">
                                    Admission: 1800-891-4232
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ
