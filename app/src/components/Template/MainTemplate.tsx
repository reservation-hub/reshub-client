import React from 'react'
import Header from '@components/Template/Header'
import Footer from '@components/Template/Footer'
import { ClassesAndChildren } from '@components/_PropsTypes'

const MainTemplate = ({ children }: ClassesAndChildren) => {
  return (
    <>
      <Header />
      <main className='bg-secondary-light'>{children}</main>
      <Footer />
    </>
  )
}

export default MainTemplate
