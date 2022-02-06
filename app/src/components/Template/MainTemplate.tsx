import React from 'react'
import Header from '@components/Template/Header'
import Footer from '@components/Template/Footer'
import { ClassesAndChildren } from '@components/_PropsTypes'
import Section from './Section'

const MainTemplate = ({ children }: ClassesAndChildren) => {
  return (
    <main className='bg-secondary-light w-full h-screen overflow-auto'>
      <Header />
      <Section classes='lg:flex lg:w-[100rem] w-full mx-auto'>
        {children}
      </Section>
      <Footer />
    </main>
  )
}

export default MainTemplate
