import React from 'react'
import { ClassesAndChildren } from '@components/_PropsTypes'

export interface SkeletonProps extends ClassesAndChildren {
  type?: 'text' | 'circular'
}

const Skeleton = ({ classes }: SkeletonProps) => {
  const defaultStyle = `bg-gray-main animate-pulse`
  const useClassesStyle = `${classes} ${defaultStyle}`
  return <div className={classes ? useClassesStyle : defaultStyle} />
}

export default Skeleton
