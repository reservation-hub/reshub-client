import React, { useCallback } from 'react'
import { IMainTemplateProps } from '@components/common/_PropsType'
import { useDispatch } from 'react-redux'
import { logout } from '@store/actions/authAction'
import Header from './Header'
// import NavBar from '@components/common/atoms/NavBar'
import '@styles/template.css'

const MainTemplate = ({ children }: IMainTemplateProps) => {
  const dispatch = useDispatch()

  const onLogout = useCallback(() => {
    dispatch(logout())
  }, [dispatch])

  return (
    <>
      <Header onLogout={onLogout} />
      <aside className='bg-primary text-secondary-main'>
        {/* <NavBar /> */}
      </aside>
      <main className='h-full'>{children}</main>
    </>
  )
}

export default React.memo(MainTemplate)
