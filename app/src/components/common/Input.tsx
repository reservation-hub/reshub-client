import React from 'react'
import ErrorMessage from './ErrorMessage'
import { ClassesAndChildren } from '@/components/_PropsTypes'

export interface IInputProps extends ClassesAndChildren {
  value?: string
  type?: 'text' | 'number' | 'file' | 'password'
  placebolder?: string
  required?: boolean
  name?: string
  error?: boolean
  errorText?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  autoComplete?: 'on' | 'off'
  id?: string
  fullWidth?: boolean
}

const Input = ({
  classes,
  value,
  placebolder,
  type,
  required,
  name,
  error,
  errorText,
  onChange,
  autoComplete,
  id,
  fullWidth
}: IInputProps) => {
  return (
    <>
      <input
        type={type}
        placeholder={placebolder}
        value={value}
        className={
          fullWidth
            ? `${classes} text-[1.6rem] p-3 w-full`
            : `${classes} text-[1.6rem] p-3`
        }
        required={required}
        name={name}
        onChange={onChange}
        autoComplete={autoComplete}
        id={id}
      />
      {error && <ErrorMessage errorMessage={errorText} />}
    </>
  )
}

export default Input
