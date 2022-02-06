import React, { FormEventHandler } from 'react'
import { Control } from 'react-hook-form'

export interface FormPorps<T> {
  defaultValue?: Record<string, any>
  error?: Record<string, any>
  control?: Control<T>
  submitHandler: FormEventHandler<HTMLFormElement>
}

export interface ModalFormProps<T> extends FormPorps<T> {
  pageType?: 'login' | 'signup'
  children?: React.ReactNode
  modalHandler?: () => void
  subModalHandler?: () => void
}
