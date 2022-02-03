import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'
import { INavBarProps } from '@components/Template/NavBar'
import { PATHS } from '@constants/paths'

const NavMenu = ({ loading, onClose, menuItem }: INavBarProps) => {
  return (
    <div className='flex text-secondary-main mt-1 md:items-center'>
      {menuItem?.map((values, index) => (
        <React.Fragment key={index}>
          {loading ? (
            <div className='mr-5 w-24 h-9 bg-gray-main rounded animate-pulse' />
          ) : (
            <>
              {values.path === PATHS.LOGIN || values.path === PATHS.LOGOUT ? (
                <Button
                  classes='border-none hover:text-secondary-dark lg:pl-4 pl-2'
                  onClick={onClose}
                >
                  {values.text}
                </Button>
              ) : (
                <NavLink
                  to={values.path}
                  className='hover:text-secondary-dark lg:p-4 p-2'
                  activeClassName='bg-secondary-main text-primary lg:h-[6rem] md:h-[5rem] h-auto md:mt-7 mt-0 rounded-tl-lg rounded-tr-lg'
                >
                  {values.text}
                </NavLink>
              )}
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default NavMenu
