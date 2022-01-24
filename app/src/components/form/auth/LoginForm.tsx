import React from 'react'
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline
} from 'react-google-login'
import { IFormPorps } from '@components/form/_PropsType'
import Input from '@components/common/Input'
import ErrorMessage from '@components/common/ErrorMessage'
import Button from '@components/common/Button'
import { PATHS } from '@/constants/paths'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineClose } from 'react-icons/ai'

export interface IAuthFormProps<T> extends IFormPorps<T> {
  googleHandler?: (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => void
  modalHandler?: () => void
}

const LoginForm = <T extends any>({
  googleHandler,
  submitHandler,
  modalHandler,
  error,
  control
}: IAuthFormProps<T>) => {
  const googleButton =
    'w-full h-[4rem] flex items-center text-center text-secondary-main bg-primary hover:text-secondary-dark'
  const localButton =
    'w-full h-[4rem] my-5 bg-primary text-secondary-main hover:text-secondary-dark'

  return (
    <div className='h-full text-gray-main'>
      <div className='flex items-center justify-between text-primary-dark'>
        <span className='text-[2.1rem]'>Reshubへログイン</span>
        <AiOutlineClose className='h-8 w-8' onClick={modalHandler} />
      </div>
      <form onSubmit={submitHandler} className='mb-5'>
        <Input
          id='email'
          name='email'
          autoComplete='off'
          placeholder='メールアドレスを入力してください。'
          label='メールアドレス'
          classes='mt-4 mb-5'
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
          label='パスワード'
          classes='my-5'
          control={control}
          error={error?.password}
          errorText={error?.password?.message}
          fullWidth
        />
        {error?.invalid && <ErrorMessage />}
        <Button classes={localButton}>ログイン</Button>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          onSuccess={googleHandler}
          onFailure={googleHandler}
          render={(renderProps) => (
            <Button onClick={renderProps.onClick} classes={googleButton}>
              <FcGoogle className='pt-1 pl-1 w-10 h-10' />
              <span className='w-full pr-6'>googleでログイン</span>
            </Button>
          )}
        />
      </form>
      <div className='text-right mt-14'>
        <span className='text-primary-dark'>
          Reshubが初めての方は
          <Link to={PATHS.SIGNUP} className='ml-2 text-primary'>
            会員登録
          </Link>
        </span>
      </div>
    </div>
  )
}

export default LoginForm
