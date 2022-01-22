import React from 'react'
import { ClassesAndChildren } from '@components/common/_PropsType'

export interface IErrorMessageProps extends ClassesAndChildren {
  text?: string
}

const ErrorMessage = ({ children, text, classes }: IErrorMessageProps) => {
  return (
    <span className={`${classes} text-error-main text-[1.4rem] mb-5`}>
      {text ? text : children}
    </span>
  )
}

export default ErrorMessage
