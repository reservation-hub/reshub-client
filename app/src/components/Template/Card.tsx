import React from 'react'
import { ClassesAndChildren } from '@components/_PropsTypes'

export interface ICardProps extends ClassesAndChildren {
  shadow?: boolean
}

const Card = ({ children, classes, shadow }: ICardProps) => {
  return (
    <div
      className={`${classes} ${
        shadow ? 'shadow-lg' : ''
      } text=[1.6rem] bg-secondary-light`}
    >
      {children}
    </div>
  )
}

export default Card
