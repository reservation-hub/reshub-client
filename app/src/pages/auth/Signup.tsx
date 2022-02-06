import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  signupSchema,
  SignupSchema
} from '@components/form/auth/authValidation'
import { zodResolver } from '@hookform/resolvers/zod'
import { createUser } from '@store/actions/userAction'
import SignupForm from '@components/form/auth/SignupForm'
import { LoginPorps } from './Login'

const Signup = ({ onClose, subModalHandler }: LoginPorps) => {
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
    <section className='bg-secondary-light rounded-lg md:w-[65rem] w-[39rem] md:h-[63rem]'>
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
