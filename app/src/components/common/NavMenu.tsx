import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'
import { INavBarProps } from '@components/Template/NavBar'

const NavMenu = ({ user, onClose, menuItem }: INavBarProps) => {
  return (
    <div className='flex'>
      {menuItem?.map((values, index) => (
        <React.Fragment key={index}>
          {values.path === '/login' || values.path === '/logout' ? (
            <Button
              classes='border-none text-[1.6rem] text-secondary-main hover:text-secondary-dark'
              onClick={onClose}
            >
              {values.text}
            </Button>
          ) : (
            <NavLink
              to={values.path}
              className='text-[1.6rem] text-secondary-main mr-5 hover:text-secondary-dark'
            >
              {values.text}
            </NavLink>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default NavMenu
