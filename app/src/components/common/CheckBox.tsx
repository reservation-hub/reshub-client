import React, { ChangeEvent, useCallback, useState } from 'react'
import { useController } from 'react-hook-form'
import { InputProps } from '../_PropsTypes'

export interface CheckBoxProps extends InputProps {
  checkedValue?: string
  setState?: React.Dispatch<React.SetStateAction<number | null>>
}

const CheckBox = ({
  classes,
  name,
  id,
  fullWidth,
  label,
  control,
  value,
  setState
}: CheckBoxProps) => {
  const { field } = useController({ name, control })
  const [isSelected, setIsSelected] = useState(false)

  const changeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const target = e.target

      if (target.checked) {
        field.onChange(target.value)
        setState && setState(Number(target.value))
        setIsSelected(true)
      } else {
        field.onChange('')
        setState && setState(null)
        setIsSelected(!isSelected)
      }
    },
    [field.value]
  )

  return (
    <div
      className={
        fullWidth
          ? `${classes} w-full flex items-center rounded-lg p-1 ${
              isSelected ? 'bg-primary text-secondary-light' : 'border'
            }`
          : `${classes} flex items-center`
      }
    >
      <label htmlFor={id} className='labels'>
        {label}
      </label>
      <input
        id={id}
        type='checkbox'
        name={name}
        value={value}
        checked={value === field.value}
        onChange={changeHandler}
      />
    </div>
  )
}

export default CheckBox
