import React from 'react'
import Header from '@components/Template/Header'
import Footer from '@components/Template/Footer'
import { ClassesAndChildren } from '@components/_PropsTypes'

const MainTemplate = ({ children, classes }: ClassesAndChildren) => {
  return (
    <main className='bg-secondary-light h-screen'>
      <Header />
      {children}
      <Footer classes={classes} />
    </main>
  )
}

export default MainTemplate
