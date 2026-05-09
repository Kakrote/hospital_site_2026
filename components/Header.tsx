"use client"

import React, { useEffect, useState } from 'react'
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
    const [menuOpen, setMenuOpen] = useState(false)
    const [expandedItems, setExpandedItems] = useState<string[]>([])

    useEffect(() => {
        if (!menuOpen) return

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = previousOverflow
        }
    }, [menuOpen])

    useEffect(() => {
        if (!menuOpen) {
            setExpandedItems([])
        }
    }, [menuOpen])

    const toggleExpanded = (itemName: string) => {
        setExpandedItems((prev) =>
            prev.includes(itemName)
                ? prev.filter((name) => name !== itemName)
                : [...prev, itemName]
        )
    }

    return (
        <header className="fixed inset-x-0 top-0 z-80 border-slate-200 bg-white/95 backdrop-blur overflow-visible">
            {/* top bar */}
            <div className="mx-auto flex w-full flex-col px-4 py-2 sm:px-6 lg:px-8 bg-[#d6d61d]">
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

            {/* main navigation - visible only on lg screens */}
            <div className="hidden lg:block border-b border-slate-200 bg-white/95 backdrop-blur">
                <div className="relative z-50 flex gap-4 lg:flex-row lg:items-center lg:justify-between container mx-auto px-4 py-4 sm:px-6 lg:px-8">
                    <Link href="/" className="inline-flex items-center gap-3">
                        <img src={data.logo} alt="Hospital logo" className="h-12 w-auto" />
                    </Link>

                    {/* Desktop navigation */}
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

            {/* Mobile header - logo and hamburger */}
            <div className="lg:hidden border-b border-slate-200 bg-white/95 backdrop-blur">
                <div className="flex items-center justify-between container mx-auto px-4 py-4 sm:px-6">
                    <Link href="/" className="inline-flex items-center gap-3">
                        <img src={data.logo} alt="Hospital logo" className="h-10 w-auto" />
                    </Link>

                    {/* Hamburger button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex flex-col gap-1.5 items-center justify-center"
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        <span className={`block w-6 h-0.5 bg-slate-700 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-slate-700 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-slate-700 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile navigation menu - visible only on small screens when menu is open */}
            {menuOpen && (
                <div className="lg:hidden absolute inset-x-0 top-full z-70 border-b border-slate-200 bg-white shadow-2xl shadow-slate-900/10 max-h-[calc(100dvh-100%)] overflow-y-auto overscroll-contain">
                    <nav aria-label="Mobile" className="px-4 py-4 sm:px-6 pb-8">
                        <ul className="flex flex-col gap-2">
                            {data.navigation.map((item) => (
                                <li key={item.name}>
                                    <div className="flex items-center justify-between">
                                        <Link
                                            href={item.link}
                                            className="flex-1 block rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                        {item.children?.length ? (
                                            <button
                                                onClick={() => toggleExpanded(item.name)}
                                                className="px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
                                                aria-label={`Toggle ${item.name} submenu`}
                                                aria-expanded={expandedItems.includes(item.name)}
                                            >
                                                <span className={`transition-transform ${expandedItems.includes(item.name) ? 'rotate-180' : ''}`}>
                                                    ▾
                                                </span>
                                            </button>
                                        ) : null}
                                    </div>
                                    {item.children?.length && expandedItems.includes(item.name) ? (
                                        <ul className="ml-4 mt-2 flex flex-col gap-1">
                                            {item.children.map((child) => (
                                                <li key={child.name}>
                                                    <Link
                                                        href={child.link}
                                                        className="block rounded-lg px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
                                                        onClick={() => setMenuOpen(false)}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : null}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Header