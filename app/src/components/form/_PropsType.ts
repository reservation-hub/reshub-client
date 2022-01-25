import React, { FormEventHandler } from 'react'
import { Control } from 'react-hook-form'

export interface IFormPorps<T> {
  defaultValue?: Record<string, any>
  error?: Record<string, any>
  control?: Control<T>
  submitHandler: FormEventHandler<HTMLFormElement>
}

export interface IModalFormProps<T> extends IFormPorps<T> {
  pageType?: 'login' | 'signup'
  children?: React.ReactNode
  modalHandler?: () => void
  subModalHandler?: () => void
}
