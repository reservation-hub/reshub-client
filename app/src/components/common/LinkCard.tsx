import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Template/CardTemplate'
import { HasURL } from '../_PropsTypes'

export interface LinkCardProps extends HasURL {
  shadow?: boolean
}

const LinkCard = ({ url, children, classes, shadow }: LinkCardProps) => {
  return (
    <Link to={url}>
      <Card classes={classes} shadow={shadow}>
        {children}
      </Card>
    </Link>
  )
}

export default LinkCard
