import React from 'react'
import { ClassesAndChildren } from '../_PropsTypes'

export interface ImageProps extends ClassesAndChildren {
  imagePath?: string
  alt?: string
}

const Image = ({ classes, imagePath, alt }: ImageProps) => {
  return (
    <div
      className={classes ? `${classes} border rounded-lg` : 'border rounded-lg'}
    >
      <img src={imagePath} alt={alt} className='w-full h-full' />
    </div>
  )
}

export default Image
