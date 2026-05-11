import React from 'react'
import Header from './Header'
import Footer from './Footer'
import content from '@/data/content.json'
import SmoothScroll from './SmoothScroll'
import Breadcrumb from './Breadcrumb'
import SEO from './SEO'

type CommonLayoutProps = {
  children: React.ReactNode
}

const CommonLayout = ({ children }: CommonLayoutProps) => {
  return (
    // <SmoothScroll>
      <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
        <Header data={content.header} />
        <main className="flex-1 pt-0 lg:pt-40">
          <SEO />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <Breadcrumb />
            {children}
          </div>
        </main>
        <Footer />
      </div>

  )
}

export default CommonLayout