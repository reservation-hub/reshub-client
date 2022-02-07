import Skeleton from '@components/common/Skeleton'
import CardLoading from '@components/list/CardLoading'
import Box from '@components/Template/Box'
import React from 'react'

const ShopDetailSkeleton = () => {
  return (
    <div className='mt-10'>
      <Skeleton />

      <div className='my-10'>
        <Box>
          <div className='flex flex-wrap justify-between px-5 pb-5 text-[1.4rem]'>
            <CardLoading count={5} price />

            <div className='flex justify-end p-5 border-none text-gray-main cursor-pointer text-[1.4rem]'>
              全てのスタイリストを見る
            </div>
          </div>
        </Box>
      </div>

      <div className='my-10'>
        <Box></Box>
      </div>
    </div>
  )
}
