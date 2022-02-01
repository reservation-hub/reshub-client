import React from 'react'
import { ClassesAndChildren } from '../_PropsTypes'

const Tag = ({ children }: ClassesAndChildren) => {
  return (
    <div className='px-1 m-1 text-[1.2rem] border border-gray-main rounded-md bg-secondary-light text-primary-dark'>
      {children}
    </div>
  )
}

export default Tag
