import React, { useState } from 'react'
import LinkTitle from '@components/common/LinkTitle'
import NavBar from './NavBar'
import { GiHamburgerMenu } from 'react-icons/gi'

const Header = () => {
  const [open, setOpen] = useState<boolean>(false)

  const header =
    'lg:w-[100rem] flex lg:p-0 h-full px-5 mx-auto justify-between items-center'
  return (
    <header
      className={open ? 'h-[6rem] bg-primary mb-20' : 'h-[6rem] bg-primary'}
    >
      <div className={header}>
        <LinkTitle title='Reshub' url='/' classes='text-secondary-main' />
        <div className='hidden md:flex items-center'>
          <NavBar />
        </div>
        <div className='md:hidden flex'>
          <GiHamburgerMenu
            onClick={() => setOpen(!open)}
            className='w-[3rem] h-[3rem] text-secondary-main'
          />
        </div>
      </div>
      {open && (
        <div className='bg-primary md:hidden'>
          <NavBar />
        </div>
      )}
    </header>
  )
}

export default Header
