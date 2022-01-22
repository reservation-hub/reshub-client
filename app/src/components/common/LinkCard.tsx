import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Template/Card'
import { HasURL } from '../_PropsTypes'

export interface ILinkCardProps extends HasURL {
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
