import React from 'react'
import { ClassesAndChildren } from '@components/common/_PropsType'

export interface IButtonProps extends ClassesAndChildren {
  onClick?: () => void
  disabled?: boolean
}

const CustomButton = ({
  children,
  onClick,
  classes,
  disabled
}: IButtonProps) => {
  const styled =
    'w-[11rem] h-[3.5rem] text-[1.4rem] corsor-pointer border bg-secondary-main text-primary rounded-[.5rem] filter drop-shadow'

  return (
    <button
      type='submit'
      onClick={onClick}
      disabled={disabled}
      className={
        disabled
          ? `${classes} ${styled} bg-table-defaultFont text-secondary-light`
          : `${classes} ${styled} hover:bg-primary hover:text-secondary-main`
      }
    >
      {children || 'button'}
    </button>
  )
}

export default CustomButton
