import React from 'react'
import Header from '@components/Template/Header'
import { ClassesAndChildren } from '@components/_PropsTypes'
import Section from './Section'

const MainTemplate = ({ children }: ClassesAndChildren) => {
  const sectionStyle =
    location.pathname === '/' ? '' : 'lg:flex lg:w-[100rem] w-full mx-auto'

  const useModalStyle =
    localStorage.getItem('useModal') === 'open' && 'h-screen'

  return (
    <main
      className={`${useModalStyle} bg-secondary-light w-full h-full overflow-auto`}
    >
      <Header />
      <Section classes={sectionStyle}>{children}</Section>
    </main>
  )
}

export default MainTemplate
