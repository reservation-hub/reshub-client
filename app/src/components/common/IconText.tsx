import React from 'react'
import { ClassesAndChildren } from '../_PropsTypes'

export interface IIconTextProps extends ClassesAndChildren {
  icon?: boolean
  text?: string
}

const IconText = ({ icon, children, classes, text }: IIconTextProps) => {
  return (
    <span className={`${classes} flex items-center`}>
      {icon && children}
      {text}
    </span>
  )
}

export default IconText
