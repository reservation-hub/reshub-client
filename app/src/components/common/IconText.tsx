import React from 'react'
import { ClassesAndChildren } from '../_PropsTypes'

export interface IconTextProps extends ClassesAndChildren {
  icon?: boolean
  text?: string
}

const IconText = ({ icon, children, classes, text }: IconTextProps) => {
  return (
    <span className={`${classes} flex items-center`}>
      {icon && children}
      {text}
    </span>
  )
}

export default IconText
