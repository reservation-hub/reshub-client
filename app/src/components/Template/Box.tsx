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
      <div
        className={`${headerClass} w-full h-[3.5rem] bg-primary flex items-center`}
      >
        <span className={`${spanClass} text-secondary-light pl-5`}>
          {title}
        </span>
      </div>
      <section className='p-5'>{children}</section>
    </div>
  )
}

export default Box
