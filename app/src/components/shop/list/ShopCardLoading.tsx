import React from 'react'
import Skeleton from '@components/common/Skeleton'
import CardTemplate from '@components/Template/CardTemplate'

const ShopCardLoading = ({ count }: { count?: number }) => {
  return (
    <>
      {Array.from({ length: Number(count) }).map((_, i) => (
        <section className='pb-5 ' key={i}>
          <CardTemplate classes='w-full border h-[20rem]' shadow>
            <div className='border-b-2 px-5 flex items-center justify-between py-1'>
              <Skeleton classes='lg:w-[20rem] w-[10rem] h-[3rem]' />
              <Skeleton classes='w-[14rem] lg:h-[2.5rem] h-[1.5rem]' />
            </div>

            <div className='flex px-5 py-3 w-full'>
              <Skeleton classes='w-[10rem] h-[10rem]' />
              <div className='px-5 grid'>
                <Skeleton classes='lg:w-[30rem] w-[10rem] lg:h-[3rem] h-[1.5rem]' />
                <Skeleton classes='lg:w-[30rem] w-[10rem] lg:h-[3rem] h-[1.5rem]' />
                <div className='flex flex-wrap'>
                  <Skeleton classes='mr-2 w-[13rem] lg:h-[2.5rem] h-[1.5rem]' />
                  <Skeleton classes='mr-2 w-[13rem] lg:h-[2.5rem] h-[1.5rem]' />
                  <Skeleton classes='w-[13rem] lg:h-[2.5rem] h-[1.5rem]' />
                </div>
              </div>
            </div>

            <div className='flex justify-end px-5'>
              <Skeleton classes='w-[15rem] h-[3.5rem]' />
            </div>
          </CardTemplate>
        </section>
      ))}
    </>
  )
}

export default ShopCardLoading
