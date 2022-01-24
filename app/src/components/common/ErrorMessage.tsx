import React from 'react'
import { TextProps } from '@components/_PropsTypes'

const ErrorMessage = ({ classes, text, children }: TextProps) => {
  return (
    <span className={`${classes} text-error-main text-[1.6rem]`}>
      {text || children}
    </span>
  )
}

export default ErrorMessage
