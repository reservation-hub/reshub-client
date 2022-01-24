import React from 'react'
import { Link } from 'react-router-dom'
import { HasURL } from '@components/_PropsTypes'
import H1 from './H1'

export interface ITitleProps extends HasURL {
  title: string
}

const LinkTitle = ({ classes, url, title }: ITitleProps) => {
  return (
    <H1 classes={classes}>
      <Link to={url}>{title}</Link>
    </H1>
  )
}

export default LinkTitle
