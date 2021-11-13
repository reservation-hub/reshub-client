import React from 'react'
import { IErrorMessageProps } from './_PropsType'

const ErrorMessage = ({ classes, errorMessage }: IErrorMessageProps) => {
  return (
    <span className={`${classes} text-error-main text-[1.6rem]`}>
      {errorMessage}
    </span>
  )
}

export default ErrorMessage
