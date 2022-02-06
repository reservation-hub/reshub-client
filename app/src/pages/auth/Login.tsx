import React, { useCallback } from 'react'
import { googleLogin, loginStart } from '@store/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@store/store'
import LoginForm from '@components/form/auth/LoginForm'
import { SubmitHandler, useForm } from 'react-hook-form'
import { loginSchema, LoginSchema } from '@components/form/auth/authValidation'
import { zodResolver } from '@hookform/resolvers/zod'
import { ModalProps } from '@components/modal/_PropsType'

export interface LoginPorps extends ModalProps {
  subModalHandler: () => void
}

const Login = ({ onClose, subModalHandler }: LoginPorps) => {
  const { msg } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
    defaultValues: { username: '', password: '' }
  })

  const section =
    errors.username && errors.password
      ? 'bg-secondary-main md:w-[65rem] w-[39rem] h-[45rem] rounded-lg'
      : errors.username || errors.password
      ? 'bg-secondary-main md:w-[65rem] w-[39rem] h-[43rem] rounded-lg'
      : 'bg-secondary-main md:w-[65rem] w-[39rem] h-[41rem] rounded-lg'

  const hasError = {
    username: errors?.username,
    password: errors?.password,
    invalid: msg
  }

  const onSubmit: SubmitHandler<LoginSchema> = useCallback(
    (value) => {
      try {
        dispatch(loginStart(value.username, value.password))
      } finally {
        onClose()
      }
    },
    [dispatch]
  )

  const googleHandler = useCallback(
    (response) => {
      try {
        dispatch(googleLogin(response))
      } finally {
        onClose()
      }
    },
    [dispatch]
  )

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
