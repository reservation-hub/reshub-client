import React, { useCallback } from 'react'
import { googleLogin, loginStart } from '@store/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { RootState } from '@store/store'
import Cookies from 'js-cookie'
import LoginForm from '@components/form/auth/LoginForm'
import { SubmitHandler, useForm } from 'react-hook-form'
import { loginSchema, LoginSchema } from '@components/form/auth/authValidation'
import { zodResolver } from '@hookform/resolvers/zod'
import { IModalProps } from '@components/modal/_PropsType'

export interface ILoginPorps extends IModalProps {
  subModalHandler: () => void
}

const Login = ({ onClose, subModalHandler }: ILoginPorps) => {
  const { msg } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' }
  })

  const section =
    errors.email && errors.password
      ? 'bg-secondary-main text-[1.6rem] w-[65rem] h-[45rem] rounded-[.5rem]'
      : errors.email || errors.password
      ? 'bg-secondary-main text-[1.6rem] w-[65rem] h-[43rem] rounded-[.5rem]'
      : 'bg-secondary-main text-[1.6rem] w-[65rem] h-[41rem] rounded-[.5rem]'

  const hasError = {
    email: errors?.email,
    password: errors?.password,
    invalid: msg
  }

  const onSubmit: SubmitHandler<LoginSchema> = useCallback(
    (value) => {
      try {
        dispatch(loginStart(value.email, value.password))
      } catch {
        console.log('e')
      } finally {
        onClose()
      }
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
        googleHandler={googleHandler}
        modalHandler={onClose}
        subModalHandler={subModalHandler}
        error={errors}
        control={control}
      />
    </section>
  )
}

export default Login
