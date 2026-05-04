import React from 'react'
import Header from './Header'
import Footer from './Footer'
import content from '@/data/content.json'

type CommonLayoutProps = {
  children: React.ReactNode
}

const CommonLayout = ({ children }: CommonLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <Header data={content.header} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default CommonLayout