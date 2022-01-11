import React from 'react'
import { ClassesAndChildren } from '@components/common/_PropsType'

const H1 = ({ children, classes }: ClassesAndChildren) => {
  return <span className={`${classes} text-[3.2rem]`}>{children}</span>
}

export default H1
