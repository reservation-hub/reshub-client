import React from 'react'
import MainTemplate from '@components/Template/MainTemplate'

const Error = () => {
  return (
    <MainTemplate>
      <div className='top-1/4 left-2/4 fixed transform translate-x-[-50%] translate-y-[-50%]'>
        <div className='gird text-center'>
          <span className='text-[3.2rem]'>PAGE NOT FOUND</span>
          <span className='text-[1.6rem] mt-5'>
            申し訳ありません。お探しのページが見つかりませんでした。
          </span>
        </div>
      </div>
    </MainTemplate>
  )
}

export default Error
