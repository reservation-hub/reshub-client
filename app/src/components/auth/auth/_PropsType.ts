import { ChangeEventHandler, FormEventHandler } from 'react'
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline
} from 'react-google-login'

export type TAuthForm = {
  email: string
  password: string
}

export interface IAuthFormProps {
  value: TAuthForm
  setValue: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  onSubmit: FormEventHandler<HTMLFormElement>
  googleHandler: (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => void
  classes?: any
}
