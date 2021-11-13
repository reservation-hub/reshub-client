import React from 'react'
import { ClassesAndChildren } from '@components/_PropsTypes'

const Card = ({ children, classes }: ClassesAndChildren) => {
  return (
    <div className={`${classes} bg-secondary-light shadow-lg`}>{children}</div>
  )
}

export default Card
