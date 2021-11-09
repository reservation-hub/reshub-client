import React from 'react'
import { IInputProps } from './_PropsType'

const Input = ({
  classes,
  value,
  placebolder,
  type,
  required,
  name
}: IInputProps) => {
  return (
    <input
      type={type}
      placeholder={placebolder}
      value={value}
      className={`${classes} text-[1.6rem] p-3`}
      required={required}
      name={name}
    />
  )
}

export default Input
