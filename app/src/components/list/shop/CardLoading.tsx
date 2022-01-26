import Skeleton from '@/components/common/Skeleton'
import Card from '@/components/Template/Card'
import React from 'react'

const CardLoading = () => {
  return (
    <section className='p-5'>
      <Card classes='w-full h-[20rem] relative' shadow>
        <div className='border-b-2 px-5 flex items-center justify-between'>
          <Skeleton width={20} height={3.6} />
          <Skeleton width={14} height={2.4} />
        </div>

        <div className='flex px-5 py-3 w-full'>
          <Skeleton width={10} height={10} />
          <div className='px-5 grid'>
            <Skeleton width={30} height={3} />
            <Skeleton width={30} height={3} />
            <div className='flex'>
              <Skeleton width={13} height={2.4} classes='mr-2' />
              <Skeleton width={13} height={2.4} classes='mr-2' />
              <Skeleton width={13} height={2.4} />
            </div>
          </div>
        </div>

        <div className='flex justify-end px-5'>
          <Skeleton width={15} height={3.5} />
        </div>
      </Card>
    </section>
  )
}

export default CardLoading
