import Skeleton from '@/components/common/Skeleton'
import Card from '@/components/Template/Card'
import React from 'react'

const CardLoading = () => {
  return (
    <section className='p-5'>
      <Card classes='w-full h-[20rem]' shadow>
        <div className='border-b-2 px-5 flex items-center justify-between py-1'>
          <Skeleton classes='w-[20rem] h-[3rem]' />
          <Skeleton classes='w-[14rem] h-[2.4rem]' />
        </div>

        <div className='flex px-5 py-3 w-full'>
          <Skeleton classes='w-[10rem] h-[10rem]' />
          <div className='px-5 grid'>
            <Skeleton classes='w-[30rem] h-[3rem]' />
            <Skeleton classes='w-[30rem] h-[3rem]' />
            <div className='flex'>
              <Skeleton classes='mr-2 w-[13rem] h-[2.5rem]' />
              <Skeleton classes='mr-2 w-[13rem] h-[2.5rem]' />
              <Skeleton classes='w-[13rem] h-[2.5rem]' />
            </div>
          </div>
        </div>

        <div className='flex justify-end px-5'>
          <Skeleton classes='w-[15rem] h-[3.5rem]' />
        </div>
      </Card>
    </section>
  )
}

export default CardLoading
