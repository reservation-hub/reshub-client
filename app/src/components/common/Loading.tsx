import React from 'react'
import '@styles/global.css'

const Loading = () => {
  const spinner =
    'w-[10rem] h-[10rem] animate-spin border-4 border-t-transparent border-primary rounded-full'

  return (
    <div className='text-[2.4rem] box-center'>
      <div className={spinner} />
      <span>Loading...</span>
    </div>
  )
}

export default Loading
