import React from 'react'
import { PUBLIC_MENU } from '@constants/paths'
import { NavLink } from 'react-router-dom'
import ModalOverlay from '../modal/ModalOverlay'
import Login from '@/pages/auth/Login'
import { useModal } from '@/utils/hooks/useModal'
import Button from './Button'

const NavMenu = () => {
  const { open, modalHandler } = useModal(false)
  return (
    <div className='flex'>
      {PUBLIC_MENU.map((values, index) => (
        <React.Fragment key={index}>
          {values.path === '/login' ? (
            <Button
              classes='border-none text-[1.6rem] text-secondary-main hover:text-secondary-dark'
              onClick={modalHandler}
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
      <ModalOverlay open={open} onClose={modalHandler}>
        <Login />
      </ModalOverlay>
    </div>
  )
}

export default NavMenu
