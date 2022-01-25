import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'
import { INavBarProps } from '@components/Template/NavBar'
import { PATHS } from '@/constants/paths'

const NavMenu = ({ loading, onClose, menuItem }: INavBarProps) => {
  return (
    <div className='flex text-[1.6rem] text-secondary-main'>
      {menuItem?.map((values, index) => (
        <React.Fragment key={index}>
          {loading ? (
            <div className='mr-5 w-24 h-9 bg-secondary-dark rounded animate-pulse' />
          ) : (
            <>
              {values.path === PATHS.LOGIN || values.path === PATHS.LOGOUT ? (
                <Button
                  classes='border-none hover:text-secondary-dark'
                  onClick={onClose}
                >
                  {values.text}
                </Button>
              ) : (
                <NavLink
                  to={values.path}
                  className='mr-5 hover:text-secondary-dark'
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
