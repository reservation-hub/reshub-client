import React from 'react'
import { IButtonProps } from '@components/common/_PropsType'

const Button = ({ children, classes, onClick, disabled }: IButtonProps) => {
  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        className={`bg-secondary-light rounded-[.2rem] border border-secondary-dark border-solid ${classes}`}
      >
        {children}
      </button>
    </>
  )
}

export default Button
