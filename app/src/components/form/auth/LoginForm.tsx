import React from 'react'
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline
} from 'react-google-login'
import { IFormPorps } from '@components/form/_PropsType'
import Input from '@components/common/Input'
import ErrorMessage from '@components/common/ErrorMessage'
import Button from '@components/common/Button'

export interface IAuthFormProps<T> extends IFormPorps<T> {
  googleHandler: (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => void
}

const LoginForm = <T extends any>({
  googleHandler,
  submitHandler,
  error,
  control
}: IAuthFormProps<T>) => {
  return (
    <div className='h-full'>
      <form onSubmit={submitHandler}>
        <Input
          id='email'
          name='email'
          autoComplete='off'
          placeholder='メールアドレスを入力してください。'
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
          placeholder='パスワードを入力してください。'
          control={control}
          error={error?.password}
          errorText={error?.password?.message}
          fullWidth
        />
        {error?.invalid && <ErrorMessage />}
        <Button>ログイン</Button>
      </form>
    </div>
  )
}

export default LoginForm
