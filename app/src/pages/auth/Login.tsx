import React, { FormEvent, useCallback } from 'react'
import { googleLogin, loginStart } from '@store/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import useInput from '@utils/hooks/useInput'
import { RootState } from '@store/store'
import Cookies from 'js-cookie'
import MainTemplate from '@/components/Template/MainTemplate'
import LoginForm from '@/components/form/auth/LoginForm'
import { SubmitHandler, useForm } from 'react-hook-form'
import { loginSchema, LoginSchema } from '@/components/form/auth/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'

const Login = () => {
  const { err } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', passowrd: '' }
  })

  const hasError = {
    username: err?.error?.keys?.includes('username'),
    password: err?.error?.keys?.includes('password'),
    invalid: err?.error?.message === 'Invalid query params'
  }

  const onSubmit: SubmitHandler<LoginSchema> = useCallback(
    (value) => {
      dispatch(loginStart(value.email, value.passowrd))
    },
    [dispatch]
  )

  const googleHandler = useCallback(
    (response) => {
      dispatch(googleLogin(response))
    },
    [dispatch]
  )

  if (Cookies.get('authToken')) return <Redirect to='/' />

  return (
    <>
      <LoginForm
        googleHandler={googleHandler}
        submitHandler={handleSubmit(onSubmit)}
        error={errors}
        control={control}
      />
    </>
  )
}

export default React.memo(Login)
