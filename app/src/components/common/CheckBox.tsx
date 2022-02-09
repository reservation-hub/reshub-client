import React, { ChangeEvent, useCallback, useState } from 'react'
import { useController } from 'react-hook-form'
import { InputProps } from '../_PropsTypes'

export interface CheckBoxProps extends InputProps {
  checkedValue?: string
  setState?: React.Dispatch<React.SetStateAction<any>>
}

const CheckBox = ({
  classes,
  name,
  id,
  fullWidth,
  label,
  control,
  value,
  placeholder,
  setState
}: CheckBoxProps) => {
  const { field } = useController({ name, control })
  const [isSelected, setIsSelected] = useState(false)

  const changeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const target = e.target
      console.log(target)
      if (target.checked) {
        field.onChange(target.value)
        setState &&
          setState({
            stylistId: Number(target.value),
            stylistName: target.id,
            stylistPrice: target.placeholder
          })
        setIsSelected(true)
      } else {
        field.onChange('')
        setState &&
          setState({ stylistId: null, stylistName: '', stylistPrice: null })
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
        placeholder={placeholder}
        checked={value === field.value}
        onChange={changeHandler}
      />
    </div>
  )
}

export default CheckBox
