import React from 'react'
import Header from '@components/common/Header'
import Footer from '@components/common/Footer'
import { TemplateProps } from '@components/Template/_PropsType'

const MainTemplate = ({ children }: TemplateProps) => {
  return (
    <>
      <Header />
      <main className='bg-secondary-light'>{children}</main>
      <Footer />
    </>
  )
}

export default MainTemplate
