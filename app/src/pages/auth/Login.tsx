import React, { FormEvent, useCallback } from 'react'
import { googleLogin, loginStart } from '@store/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import useInput from '@utils/hooks/useInput'
import LoginForm from '@components/auth/LoginForm'
import LoginSelectHeader from '@components/common/choose/LoginSelectHeader'
import LoginSelectFooter from '@components/common/choose/LoginSelectFooter'
import CenterBox from '@components/common/layout/CenterBox'
import { RootState } from '@store/store'
import SubTemplate from '@components/common/layout/SubTemplate'
import Cookies from 'js-cookie'

const Login = () => {
  const { input, ChangeHandler } = useInput({ username: '', password: '' })
  const { err } = useSelector((state: RootState) => state.auth)

  const hasError = {
    username: err?.error?.keys?.includes('username'),
    password: err?.error?.keys?.includes('password'),
    invalid: err?.error?.message === 'Invalid query params'
  }

  const dispatch = useDispatch()

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      dispatch(loginStart(input.username, input.password))
    },
    [dispatch, input]
  )

  const googleHandler = useCallback(
    (response) => {
      dispatch(googleLogin(response))
    },
    [dispatch]
  )

  if (Cookies.get('authToken')) return <Redirect to='/' />

  return (
    <SubTemplate>
      <CenterBox>
        <LoginSelectHeader />
        <LoginForm
          value={input}
          setValue={ChangeHandler}
          onSubmit={onSubmit}
          googleHandler={googleHandler}
          error={hasError}
        />
        <LoginSelectFooter />
      </CenterBox>
    </SubTemplate>
  )
}

export default React.memo(Login)
