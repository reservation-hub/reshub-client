import React from 'react'
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline
} from 'react-google-login'
import { IModalFormProps } from '@components/form/_PropsType'
import Input from '@components/common/Input'
import ErrorMessage from '@components/common/ErrorMessage'
import Button from '@components/common/Button'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineClose } from 'react-icons/ai'
import ModalFormWrapper from '../ModalFormWrapper'

export interface IAuthFormProps<T> extends IModalFormProps<T> {
  googleHandler?: (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => void
}

const LoginForm = <T extends any>({
  googleHandler,
  submitHandler,
  modalHandler,
  subModalHandler,
  error,
  control
}: IAuthFormProps<T>) => {
  const googleButton =
    'w-full h-[4rem] flex items-center text-center text-secondary-main bg-primary hover:text-secondary-dark'
  const localButton =
    'w-full h-[4rem] mt-7 mb-6 bg-primary text-secondary-main hover:text-secondary-dark'

  return (
    <ModalFormWrapper
      pageType='login'
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
    </ModalFormWrapper>
  )
}

export default LoginForm
