import React from 'react'
import Button from './Button'
import { ClassesAndChildren } from '@components/_PropsTypes'

export interface IIconhButtonProps extends ClassesAndChildren {
  onClick?: () => void
  icon?: boolean
  text?: string
}

const IconButton = ({
  onClick,
  icon,
  text,
  children,
  classes
}: IIconhButtonProps) => {
  return (
    <div className={classes}>
      <Button
        onClick={onClick}
        classes='lg:w-[20rem] w-[16rem] h-[4.5rem] border-none'
      >
        <span className='flex items-center p-3'>
          {icon && children}
          {text}
        </span>
      </Button>
    </div>
  )
}

export default IconButton
