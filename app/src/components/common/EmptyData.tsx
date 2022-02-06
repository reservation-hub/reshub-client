import React from 'react'
import { TextProps } from '../_PropsTypes'

const EmptyData = ({ text }: TextProps) => {
  return (
    <div className='text-center w-full p-10 bg-gray-200 text-primary-dark'>
      <span>表示する{text}がありません。</span>
    </div>
  )
}

export default EmptyData
