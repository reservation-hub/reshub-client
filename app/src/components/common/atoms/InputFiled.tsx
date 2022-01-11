import React from 'react'
import { IInputProps } from '@components/common/_PropsType'
import ErrorMessage from './ErrorMessage'

const INPUT_TYPE = {
  TEXT: 'text',
  NUMBER: 'number',
  FILE: 'file',
  PASSWORD: 'password'
} as const

export interface IInputFiledProps extends IInputProps {
  type?: typeof INPUT_TYPE[keyof typeof INPUT_TYPE]
  autoComplete?: 'on' | 'off'
  placeholder?: string
  required?: boolean
  error?: boolean
  errorTxt?: string
  fullWidth?: boolean
}

const InputFiled = ({
  classes,
  value,
  type,
  id,
  autoComplete,
  placeholder,
  required,
  name,
  error,
  errorTxt,
  fullWidth,
  label,
  onChange,
  onBlur
}: IInputFiledProps) => {
  const input =
    'w-full text-[1.6rem] p-3 border rounded-[.25rem] focus:border-2 focus:border-primary'
  return (
    <div className={fullWidth ? `${classes} w-full` : classes}>
      <div className='text-[1.6rem]'>
        {label && (
          <label htmlFor={id} className='text-table-headerFont'>
            {label}
          </label>
        )}
        <input
          type={type}
          id={id}
          value={value}
          autoComplete={autoComplete}
          placeholder={placeholder}
          required={required}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          className={error ? `${input} border-error-main` : `${input}`}
        />
      </div>
      {error && <ErrorMessage text={errorTxt} />}
    </div>
  )
}

export default React.memo(InputFiled)
