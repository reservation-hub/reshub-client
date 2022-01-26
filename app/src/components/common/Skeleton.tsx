import React from 'react'
import { ClassesAndChildren } from '@components/_PropsTypes'

export interface ISkeletonProps extends ClassesAndChildren {
  width?: number
  height?: number
  type?: 'text' | 'circular'
}

const Skeleton = ({ classes, width, height, type }: ISkeletonProps) => {
  return (
    <div
      className={`${classes} w-[${width}rem] h-[${height}rem] bg-gray-main animate-pulse ${
        type === 'circular' ? 'rounded-[50%]' : ''
      }`}
    />
  )
}

export default Skeleton
