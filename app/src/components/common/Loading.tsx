import React from 'react'
import '@styles/global.css'

const Loading = () => {
  const spinner =
    'w-[5rem] h-[5rem] animate-spin border-4 border-t-transparent border-primary rounded-full'

  return (
    <div className='text-[2.4rem] box-center'>
      <div className={spinner} />
    </div>
  )
}

export default Loading
