import React from 'react'
import { Link } from 'react-router-dom'
import { ClassesAndChildren } from '@/components/_PropsTypes'

export interface ITitleProps extends ClassesAndChildren {
  isLink?: boolean
  title: string
  url: string
}

const LinkTitle = ({ classes, isLink, url, title }: ITitleProps) => {
  return (
    <h1 className={`${classes} text-[3.2rem]`}>
      {isLink ? <Link to={url}>{title}</Link> : title}
    </h1>
  )
}

export default LinkTitle
