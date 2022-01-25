import Login from '@pages/auth/Login'
import Signup from '@pages/auth/Signup'
import { useModal } from '@utils/hooks/useModal'
import React, { useCallback } from 'react'
import ModalOverlay from '@components/modal/ModalOverlay'
import { useDispatch } from 'react-redux'
import { IModalProps } from '@components/modal/_PropsType'
import { UserForAuth } from '@utils/api/request-response-types/client/models/User'
import NavMenu from '../common/NavMenu'
import { PRIVATE_MENU, PUBLIC_MENU } from '@constants/paths'
import { logout } from '@store/actions/authAction'
import Cookies from 'js-cookie'

export interface INavBarProps extends IModalProps {
  user?: UserForAuth
  menuItem?: { path: string; text: string }[]
}

const NavBar = () => {
  const login = useModal(false)
  const signup = useModal(false)
  const dispatch = useDispatch()
  const authToken = Cookies.get('authToken')

  const onLogout = useCallback(() => {
    dispatch(logout())
  }, [dispatch])

  return (
    <div className='flex'>
      <NavMenu
        onClose={authToken ? onLogout : login.modalHandler}
        menuItem={authToken ? PRIVATE_MENU : PUBLIC_MENU}
      />

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

export default NavBar
