import React from 'react'
import { ClassesAndChildren } from '@components/_PropsTypes'

export interface CardProps extends ClassesAndChildren {
  shadow?: boolean
}

const CardTemplate = ({ children, classes, shadow }: CardProps) => {
  return (
    <div
      className={`${classes} ${shadow ? 'shadow-lg' : ''} bg-secondary-light`}
    >
      {children}
    </div>
  )
}

export default CardTemplate
