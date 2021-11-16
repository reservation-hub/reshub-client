import React from 'react'
import MainTemplate from '@components/Template/MainTemplate'

const Error = () => {
  return (
    <MainTemplate classes='absolute'>
      <div className='w-full top-[45%] absolute'>
        <div className='gird text-center'>
          <span className='text-[3.2rem]'>PAGE NOT FOUND</span>
          <br />
          <span className='text-[1.6rem] mt-5'>
            申し訳ありません。お探しのページが見つかりませんでした。
          </span>
        </div>
      </div>
    </MainTemplate>
  )
}

export default Error
