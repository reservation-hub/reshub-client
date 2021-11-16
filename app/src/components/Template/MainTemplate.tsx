import React from 'react'
import Header from '@components/Template/Header'
import Footer from '@components/Template/Footer'
import { ClassesAndChildren } from '@components/_PropsTypes'

const MainTemplate = ({ children }: ClassesAndChildren) => {
  return (
    <main className='bg-secondary-light h-screen'>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default MainTemplate
