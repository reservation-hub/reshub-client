import React from 'react'
import { useController } from 'react-hook-form'
import { AsyncPaginate, LoadOptions } from 'react-select-async-paginate'
import { PickerProps } from '../_PropsTypes'
import ErrorMessage from './ErrorMessage'

export interface IAsyncSelectorProps extends PickerProps {
  loadOptions: LoadOptions<any, any, { page: any }>
  defaultAdditional?: { page: number }
  numric?: boolean
}

const AsyncSelector = ({
  control,
  name,
  item,
  classes,
  label,
  id,
  error,
  errorText,
  defaultAdditional,
  value,
  numric,
  loadOptions
}: IAsyncSelectorProps) => {
  const { field } = useController({ control, name })
  return (
    <div className={`${classes} text-[1.6rem]`}>
      <label
        htmlFor={id}
        className={error ? 'text-error-main' : 'text-table-headerFont'}
      >
        {label}
      </label>
      <AsyncPaginate
        additional={defaultAdditional}
        loadOptions={loadOptions}
        value={item?.find((v) => v.value === field.value)}
        onChange={(e) => {
          numric ? field.onChange(Number(e?.value)) : field.onChange(e?.value)
        }}
        defaultInputValue={value}
        classNamePrefix={error ? 'react-select-error' : 'react-select'}
      />
      {error && <ErrorMessage text={errorText} />}
    </div>
  )
}

export default AsyncSelector
