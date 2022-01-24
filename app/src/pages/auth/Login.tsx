import React, { useCallback } from 'react'
import { googleLogin, loginStart } from '@store/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { RootState } from '@store/store'
import Cookies from 'js-cookie'
import LoginForm from '@components/form/auth/LoginForm'
import { SubmitHandler, useForm } from 'react-hook-form'
import { loginSchema, LoginSchema } from '@components/form/auth/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'

const Login = () => {
  const section =
    'bg-secondary-main text-[1.6rem] w-[65rem] h-[41rem] p-10 rounded-[.5rem]'
  const { msg } = useSelector((state: RootState) => state.auth)
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
    <section className={section}>
      <LoginForm
        submitHandler={handleSubmit(onSubmit)}
        error={errors}
        control={control}
      />
    </section>
  )
}

export default React.memo(Login)
