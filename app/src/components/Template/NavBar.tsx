import React, { useCallback } from 'react'
import Login from '@pages/auth/Login'
import Signup from '@pages/auth/Signup'
import { useModal } from '@utils/hooks/useModal'
import ModalOverlay from '@components/modal/ModalOverlay'
import { useDispatch, useSelector } from 'react-redux'
import { ModalProps } from '@components/modal/_PropsType'
import NavMenu from '../common/NavMenu'
import { PRIVATE_MENU, PUBLIC_MENU } from '@constants/paths'
import { logout } from '@store/actions/authAction'
import Cookies from 'js-cookie'
import { RootState } from '@store/store'

export interface NavBarProps extends ModalProps {
  loading?: boolean
  menuItem?: { path: string; text: string }[]
}

const NavBar = () => {
  const login = useModal(false)
  const signup = useModal(false)
  const dispatch = useDispatch()
  const authToken = Cookies.get('sessionToken')
  const { loading } = useSelector((state: RootState) => state.auth)

  const onLogout = useCallback(() => {
    dispatch(logout())
  }, [dispatch])

  return (
    <div className='flex'>
      <NavMenu
        loading={loading}
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
