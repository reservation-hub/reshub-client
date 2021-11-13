import React from 'react'
import ErrorMessage from './ErrorMessage'
import { IInputProps } from './_PropsType'

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
