import React from 'react'
import Header from '@components/Template/Header'
import Footer from '@components/Template/Footer'
import { ITemplateProps } from '@components/Template/_PropsType'

const MainTemplate = ({ children }: ITemplateProps) => {
  return (
    <>
      <Header />
      <main className='bg-secondary-light'>{children}</main>
      <Footer />
    </>
  )
}

export default MainTemplate
