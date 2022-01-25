import React from 'react'
import { PUBLIC_MENU } from '@constants/paths'
import { NavLink } from 'react-router-dom'
import ModalOverlay from '@components/modal/ModalOverlay'
import Login from '@/pages/auth/Login'
import { useModal } from '@utils/hooks/useModal'
import Button from './Button'
import Signup from '@pages/auth/Signup'

const NavMenu = () => {
  const login = useModal(false)
  const signup = useModal(false)

  return (
    <div className='flex'>
      {PUBLIC_MENU.map((values, index) => (
        <React.Fragment key={index}>
          {values.path === '/login' ? (
            <Button
              classes='border-none text-[1.6rem] text-secondary-main hover:text-secondary-dark'
              onClick={login.modalHandler}
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

      {login.open && (
        <ModalOverlay open={login.open} onClose={login.modalHandler}>
          <div
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <Login
              onClose={login.modalHandler}
              subModalHandler={() => {
                signup.modalHandler(), login.modalHandler()
              }}
            />
          </div>
        </ModalOverlay>
      )}

      {signup.open && (
        <ModalOverlay open={signup.open} onClose={signup.modalHandler}>
          <div
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <Signup
              onClose={signup.modalHandler}
              subModalHandler={() => {
                signup.modalHandler(), login.modalHandler()
              }}
            />
          </div>
        </ModalOverlay>
      )}
    </div>
  )
}

export default NavMenu
