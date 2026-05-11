'use client';

import Image from 'next/image';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

interface ContactDetailsProps {
    logo: string;
    phone: string[];
    email: string;
    address: string;
}

const ContactDetails = ({ logo, phone, email, address }: ContactDetailsProps) => {
    return (
        <section className="relative py-20 px-4 md:px-6 lg:px-8 overflow-hidden"
         style={{
                backgroundImage: `url('/assets/backgrounds/pattern-11.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-emerald-50 -z-10" />

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-10 -z-10 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100 rounded-full opacity-10 -z-10 blur-3xl" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Logo Section */}
                    <div className="flex flex-col justify-center items-center md:items-start space-y-6">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                            <div className="relative bg-white rounded-2xl p-4 shadow-lg">
                                <div className="relative w-40 h-40">
                                    <Image
                                        src={logo}
                                        alt="Hospital Logo"
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="text-center md:text-left space-y-3">
                            <h3 className="text-xl font-bold text-gray-900">
                                UHDC - Uttaranchal Hospital
                            </h3>
                            <p className="text-gray-600 leading-relaxed max-w-sm">
                                Committed to delivering evidence-based, patient-centered healthcare with compassion, precision, and excellence. 24/7 emergency services available.
                            </p>
                            <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-600 font-semibold">
                                <Heart className="h-5 w-5 fill-current" />
                                <span>Your Health, Our Priority</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Details Cards */}
                    <div className="space-y-3">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                                Get in <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Touch</span>
                            </h2>
                            <p className="text-gray-600 text-lg">We're here to help and answer any question you might have</p>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="space-y-4 pt-6">
                            {/* Phone Card */}
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                                <div className="relative bg-white rounded-xl p-4 shadow-md group-hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg">
                                                <Phone className="h-6 w-6" />
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                                Phone Numbers
                                            </h3>
                                            <div className="space-y-2">
                                                {phone.map((phoneNumber, index) => (
                                                    <a
                                                        key={index}
                                                        href={`tel:${phoneNumber}`}
                                                        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors font-medium group/link"
                                                    >
                                                        <span className="text-blue-400 mr-2 group-hover/link:translate-x-1 transition-transform">→</span>
                                                        {phoneNumber}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Email Card */}
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                                <div className="relative bg-white rounded-xl p-4 shadow-md group-hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-emerald-200">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-lg">
                                                <Mail className="h-6 w-6" />
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                                Email Address
                                            </h3>
                                            <a
                                                href={`mailto:${email}`}
                                                className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors font-medium group/link"
                                            >
                                                <span className="text-emerald-400 mr-2 group-hover/link:translate-x-1 transition-transform">→</span>
                                                {email}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Address Card */}
                            <div className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-rose-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                                <div className="relative bg-white rounded-xl p-4 shadow-md group-hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-rose-200">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-rose-600 to-rose-700 text-white shadow-lg">
                                                <MapPin className="h-6 w-6" />
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                                Visit Us
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed hover:text-rose-600 transition-colors cursor-pointer">
                                                {address}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="pt-4">
                            <button className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95">
                                Schedule an Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactDetails;
