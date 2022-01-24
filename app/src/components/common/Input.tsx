import React from 'react'
import ErrorMessage from './ErrorMessage'
import { InputProps } from '@components/_PropsTypes'
import { useController } from 'react-hook-form'

const INPUT_TYPE = {
  TEXT: 'text',
  NUMBER: 'number',
  FILE: 'file',
  PASSWORD: 'password'
} as const

export interface IInputProps extends InputProps {
  type?: typeof INPUT_TYPE[keyof typeof INPUT_TYPE]
}

const Input = ({
  classes,
  placeholder,
  type,
  required,
  name,
  error,
  errorText,
  autoComplete,
  id,
  fullWidth,
  label,
  control
}: IInputProps) => {
  const { field } = useController({ name, control })
  const input = 'w-full p-3 border rounded-[.25rem]'
  return (
    <div className={fullWidth ? `${classes} w-full` : classes}>
      <div className='text-[1.6rem]'>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          className={error ? `${input} border-error-main` : input}
          {...field}
        />
      </div>
      {error && <ErrorMessage text={errorText} />}
    </div>
  )
}

export default Input
