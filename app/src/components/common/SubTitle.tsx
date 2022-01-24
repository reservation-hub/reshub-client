import React from 'react'
import { ClassesAndChildren, TextProps } from '@components/_PropsTypes'

export interface ISubTitleProps extends ClassesAndChildren {
  subTitle?: string
}

const SubTitle = ({ text, classes }: TextProps) => {
  return <span className={`${classes} text-[2.8rem]`}>{text}</span>
}

export default SubTitle
