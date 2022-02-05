import React from 'react'
import { useController } from 'react-hook-form'
import { PickerProps } from '../_PropsTypes'
import ErrorMessage from './ErrorMessage'
import Select from 'react-select'

export interface SelectorProps extends PickerProps {
  defaultValue?: string
  classNamePrefix?: string
}

const Selector = ({
  id,
  label,
  name,
  item,
  classes,
  control,
  error,
  value,
  errorText,
  classNamePrefix
}: SelectorProps) => {
  const { field } = useController({ control, name })

  return (
    <div className={`${classes} text-[1.6rem]`}>
      <label htmlFor={id} className='text-table-headerFont'>
        {label}
      </label>
      <Select
        id={id}
        options={item}
        name={name}
        defaultValue={item?.find((v) => v.value === value)}
        value={item?.find((v) => v.value === field.value)}
        onChange={(e) => {
          field.onChange(e?.value)
        }}
        classNamePrefix={
          classNamePrefix ? `${classNamePrefix}` : 'react-select'
        }
      />
      {error && <ErrorMessage text={errorText} />}
    </div>
  )
}

export default Selector
