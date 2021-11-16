import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Template/Card'
import { ClassesAndChildren } from '../_PropsTypes'

export interface ILinkCardProps extends ClassesAndChildren {
  url: string
  shadow?: boolean
}

const LinkCard = ({ url, children, classes, shadow }: ILinkCardProps) => {
  return (
    <Card classes={classes} shadow={shadow}>
      <Link to={url}>{children}</Link>
    </Card>
  )
}

export default LinkCard
