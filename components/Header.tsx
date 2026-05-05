import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type NavigationItem = {
    name: string
    link: string
    children?: NavigationItem[]
}

type HeaderProps = {
    logo: string
    cta: string
    contact: string[]
    addmission: string
    navigation: NavigationItem[]
    cta2: string
}

const Header = ({ data }: { data: HeaderProps }) => {
    return (
        <header className="fixed inset-x-0 top-0 z-80 border-slate-200 bg-white/95 backdrop-blur overflow-visible">
            {/* top bar */}
            <div className="mx-auto flex w-full  flex-col gap-4 px-4 py-2 sm:px-6 lg:px-8 bg-[#d6d61d]">
                <div className="flex container mx-auto flex-col gap-3 text-sm text-black md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                        {/* apply now button */}
                        <span className="font-semibold bg-[#ca0000] py-2  px-3 rounded-xl text-[#ffff]">{data.cta}</span>
                        <Image 
                        src={"/assets/icons/call.png"} 
                        alt="Hospital logo" 
                        width={12} 
                        height={12}
                        // className="h-8 w-auto" 
                        />
                        <span>{data.contact.join(' | ')}</span>
                        <span>Admission: {data.addmission}</span>
                    </div>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                    >
                        {data.cta2}
                    </Link>
                </div>

            </div>

            {/* main navigation */}

            <div className="border-b border-slate-200 bg-white/95 backdrop-blur">
                <div className="relative z-50 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between container mx-auto px-4 py-4 sm:px-6 lg:px-8">
                    <Link href="/" className="inline-flex items-center gap-3">
                        <img src={data.logo} alt="Hospital logo" className="h-12 w-auto" />
                    </Link>

                    <nav aria-label="Primary" className="relative z-50 w-full lg:w-auto">
                        <ul className="flex flex-wrap items-center gap-2 lg:justify-end">
                        {data.navigation.map((item) => (
                            <li key={item.name} className="relative group">
                                {item.children?.length ? (
                                    <>
                                        <Link
                                            href={item.link}
                                            className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                                        >
                                            {item.name}
                                            <span className="ml-2 text-xs">▾</span>
                                        </Link>
                                        <div className="invisible absolute left-0 top-full z-70 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                                            <ul className="min-w-64 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-200/70 ">
                                                {item.children.map((child) => (
                                                    <li key={child.name}>
                                                        <Link
                                                            href={child.link}
                                                            className="block rounded-xl px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                                                        >
                                                            {child.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={item.link}
                                        className="inline-flex rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header