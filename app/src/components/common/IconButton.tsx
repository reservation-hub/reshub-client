import React from 'react'
import Button, { ButtonProps } from './Button'

export interface IconButtonProps extends ButtonProps {
  icon?: boolean
  text?: string
}

const IconButton = ({
  onClick,
  icon,
  text,
  children,
  classes
}: IconButtonProps) => {
  return (
    <div className={classes}>
      <Button onClick={onClick} classes='w-full h-[4.5rem] border-none'>
        <span className='flex items-center p-3'>
          {icon && children}
          {text}
        </span>
      </Button>
    </div>
  )
}

export default IconButton
