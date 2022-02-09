import React from 'react'
import { FormProps } from '@components/form/_PropsType'
import Button from '../common/Button'

export interface FormWrapperProps<T> extends FormProps<T> {
  buttonText?: string
}

const FormWrapper = <T extends Record<string, any>>({
  children,
  buttonText,
  submitHandler
}: FormWrapperProps<T>) => {
  return (
    <form onSubmit={submitHandler}>
      {children}
      <Button classes='w-full bg-primary text-secondary-light p-2 mt-10'>
        {buttonText}
      </Button>
    </form>
  )
}

export default FormWrapper
