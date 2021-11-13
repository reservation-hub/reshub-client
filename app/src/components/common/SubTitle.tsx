import React from 'react'
import { ClassesAndChildren } from '@components/_PropsTypes'

export interface ISubTitleProps extends ClassesAndChildren {
  subTitle?: string
}

const SubTitle = ({ subTitle, classes }: ISubTitleProps) => {
  return <span className={`${classes} text=[2.8rem]`}>{subTitle}</span>
}

export default SubTitle
