import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
import LoginForm from '@components/form/auth/LoginForm'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  signupSchema,
  SignupSchema
} from '@components/form/auth/authValidation'
import { zodResolver } from '@hookform/resolvers/zod'
import { IModalProps } from '@components/modal/_PropsType'
import { createUser } from '@store/actions/userAction'
import SignupForm from '@components/form/auth/SignupForm'
import { ILoginPorps } from './Login'

const Signup = ({ onClose, subModalHandler }: ILoginPorps) => {
  const dispatch = useDispatch()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<SignupSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(signupSchema),
    defaultValues: { email: '', password: '', confirm: '', username: '' }
  })

  const onSubmit: SubmitHandler<SignupSchema> = useCallback(
    (value) => {
      dispatch(createUser(value))
    },
    [dispatch]
  )

  return (
    <section className='bg-secondary-light text-[1.6rem] rounded-[.5rem] w-[65rem] h-[63rem]'>
      <SignupForm
        control={control}
        error={errors}
        submitHandler={handleSubmit(onSubmit)}
        modalHandler={onClose}
        subModalHandler={subModalHandler}
      />
    </section>
  )
}

export default Signup
