import React from 'react'
import { PUBLIC_MENU } from '@constants/paths'
import { NavLink } from 'react-router-dom'

const NavMenu = () => {
  return (
    <div className='flex'>
      {PUBLIC_MENU.map((values, index) => (
        <React.Fragment key={index}>
          <NavLink
            to={values.path}
            className='text-[1.6rem] text-secondary-main mr-5 hover:text-secondary-dark'
          >
            {values.text}
          </NavLink>
        </React.Fragment>
      ))}
    </div>
  )
}

export default NavMenu
