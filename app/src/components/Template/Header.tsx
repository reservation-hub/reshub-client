import React from 'react'
import NavMenu from '@components/common/NavMenu'
import LinkTitle from '@components/common/LinkTitle'
import NavBar from './NavBar'

const Header = () => {
  const header =
    'lg:w-[100rem] lg:flex md:flex lg:p-0 h-full px-5 mx-auto justify-between items-center'
  return (
    <header className='h-[8rem] bg-primary'>
      <div className={header}>
        <LinkTitle title='Reshub' url='/' classes='text-secondary-main' />
        <NavBar />
      </div>
    </header>
  )
}

export default Header
