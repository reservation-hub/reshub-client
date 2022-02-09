import React, { FormEventHandler } from 'react'
import { Control } from 'react-hook-form'
import { ClassesAndChildren } from '../_PropsTypes'

export interface FormProps<T> extends ClassesAndChildren {
  defaultValue?: Record<string, any>
  error?: Record<string, any>
  control?: Control<T>
  submitHandler: FormEventHandler<HTMLFormElement>
}

export interface ModalFormProps<T> extends FormProps<T> {
  pageType?: 'login' | 'signup'
  children?: React.ReactNode
  modalHandler?: () => void
  subModalHandler?: () => void
}
