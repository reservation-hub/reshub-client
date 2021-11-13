import React from 'react'
import Button from './Button'
import { ISearchButtonProps } from './_PropsType'

const IconButton = ({onClick, icon, text, children}: ISearchButtonProps) => {
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
