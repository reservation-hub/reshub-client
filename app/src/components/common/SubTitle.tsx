import React from 'react'
import { TextProps } from '@components/_PropsTypes'

const SubTitle = ({ text, classes }: TextProps) => {
  return <span className={`${classes} text-[2.4rem]`}>{text}</span>
}

export default SubTitle
