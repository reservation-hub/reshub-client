import React from 'react'
import { ClassesAndChildren } from '@components/_PropsTypes'

export interface ButtonProps extends ClassesAndChildren {
  disabled?: boolean
  onClick?: () => void
}

const Button = ({ children, classes, onClick, disabled }: ButtonProps) => {
  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        className={`rounded-[.2rem] border border-secondary-dark border-solid ${classes}`}
      >
        {children}
      </button>
    </>
  )
}

export default Button
