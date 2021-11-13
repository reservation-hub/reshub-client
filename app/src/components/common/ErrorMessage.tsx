import React from 'react'
import { ClassesAndChildren } from '@/components/_PropsTypes'

export interface IErrorMessageProps extends ClassesAndChildren {
  errorMessage?: string
}

const ErrorMessage = ({ classes, errorMessage }: IErrorMessageProps) => {
  return (
    <span className={`${classes} text-error-main text-[1.6rem]`}>
      {errorMessage}
    </span>
  )
}

export default ErrorMessage
