import React from 'react'
import Button from '@components/common/Button'
import Input from '@components/common/Input'
import { IModalFormProps } from '@components/form/_PropsType'
import { SignupSchema } from './authValidation'
import ModalFormWrapper from '../../modal/ModalFormWrapper'

const SignupForm = <T extends SignupSchema>({
  control,
  error,
  submitHandler,
  modalHandler,
  subModalHandler
}: IModalFormProps<T>) => {
  const localButton =
    'w-full h-[4rem] mt-7 mb-6 bg-primary text-secondary-main hover:text-secondary-dark'

  return (
    <ModalFormWrapper
      pageType='signup'
      submitHandler={submitHandler}
      modalHandler={modalHandler}
      subModalHandler={subModalHandler}
    >
      <Input
        id='email'
        name='email'
        autoComplete='off'
        label='メールアドレス'
        classes='mt-2 mb-3'
        control={control}
        error={error?.email}
        errorText={error?.email?.message}
        fullWidth
      />
      <Input
        id='password'
        name='password'
        type='password'
        autoComplete='off'
        label='パスワード'
        classes='my-3'
        control={control}
        error={error?.password}
        errorText={error?.password?.message}
        fullWidth
      />
      <Input
        id='confirm'
        name='confirm'
        type='password'
        autoComplete='off'
        label='パスワード確認'
        classes='my-3'
        control={control}
        error={error?.confirm}
        errorText={error?.confirm?.message}
        fullWidth
      />
      <Input
        id='username'
        name='username'
        autoComplete='off'
        label='ユーザー名'
        classes='my-3'
        control={control}
        error={error?.username}
        errorText={error?.username?.message}
        fullWidth
      />
      <Button classes={localButton}>登録</Button>
    </ModalFormWrapper>
  )
}

export default SignupForm
