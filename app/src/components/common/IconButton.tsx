import React from 'react'
import Button from './Button'
import { ClassesAndChildren } from '@components/_PropsTypes'

export interface IIconhButtonProps extends ClassesAndChildren {
  onClick?: () => void
  icon?: boolean
  text?: string
}

const IconButton = ({ onClick, icon, text, children }: IIconhButtonProps) => {
  return (
    <>
      <Button
        onClick={onClick}
        classes='w-[20rem] h-[4.5rem] text-[1.6rem] m-2'
      >
        <span className='flex p-3'>
          {icon && children}
          {text}
        </span>
      </Button>
    </>
  )
}

export default IconButton
