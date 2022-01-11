import React from 'react'

export interface IEmptyProps {
  text?: string
}

const IsEmpty = ({ text }: IEmptyProps) => {
  return (
    <div className='text-center w-full p-10 text-[1.6rem]'>
      <span>現在登録されている{text}はございません。</span>
    </div>
  )
}

export default IsEmpty
