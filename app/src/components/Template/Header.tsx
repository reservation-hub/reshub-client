import React from 'react'
import NavMenu from '@components/common/NavMenu'
import LinkTitle from '@components/common/LinkTitle'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header className='h-[8rem] bg-primary'>
      <div className='w-[100rem] h-full flex mx-auto justify-between items-center'>
        <LinkTitle title='Reshub' url='/' classes='text-secondary-main' />
        <NavBar />
      </div>
    </header>
  )
}

export default Header
