import { FormEventHandler } from 'react'
import { Control } from 'react-hook-form'

export interface IFormPorps<T> {
  defaultValue?: Record<string, any>
  error?: Record<string, any>
  control?: Control<T>
  submitHandler: FormEventHandler<HTMLFormElement>
}
