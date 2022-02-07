import React from 'react'
import { TextProps } from '@components/_PropsTypes'

const ReservationHeader = ({ text }: TextProps) => {
  return (
    <div className='bg-primary text-secondary-light p-5 mb-5 rounded-lg'>
      {text}
    </div>
  )
}

export default ReservationHeader
