import React from 'react'
import { ClassesAndChildren } from '../_PropsTypes'
import Header from './Header'
import Section from './Section'

const SubTemplate = ({ children }: ClassesAndChildren) => {
  const useModalStyle =
    localStorage.getItem('useModal') === 'open' && 'h-screen'

  return (
    <main
      className={`${useModalStyle} bg-secondary-light w-full overflow-auto`}
    >
      <Header />
      <Section classes='lg:flex lg:w-[100rem] w-full h-full mx-auto'>
        {children}
      </Section>
    </main>
  )
}

export default SubTemplate
