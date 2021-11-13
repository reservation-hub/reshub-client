import React from 'react'
import { ClassesAndChildren } from '@components/_PropsTypes'

export interface IBoxProps extends ClassesAndChildren {
  boxClass?: string
  headerClass?: string
  spanClass?: string
  title?: string
}

const Box = ({
  children,
  boxClass,
  headerClass,
  spanClass,
  title
}: IBoxProps) => {
  return (
    <div className={`${boxClass} shadow-md`}>
      <div className={`${headerClass} h-[3.5rem] bg-primary`}>
        <span className={`${spanClass} text-secondary-light pl-5`}>
          {title}
        </span>
      </div>
      {children}
    </div>
  )
}

export default Box
