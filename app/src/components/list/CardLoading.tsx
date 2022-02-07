import React from 'react'
import Button from '../common/Button'
import Skeleton from '../common/Skeleton'
import CardTemplate from '../Template/CardTemplate'

const CardLoading = ({ count, price }: { count?: number; price?: boolean }) => {
  return (
    <>
      {Array.from({ length: Number(count) }).map((_, i) => (
        <CardTemplate
          key={i}
          shadow
          classes='grid justify-center mt-5 p-5 rounded-lg border w-[17rem]'
        >
          <Skeleton classes='w-40 h-40 mx-auto' />
          <div className='mt-5'>
            <Skeleton classes='w-40 h-8' />
            {price && <Skeleton classes='w-40 h-8 mt-1' />}
          </div>
          <Button classes='mt-4 rounded-lg border-none'>
            <Skeleton classes='w-40 h-8' />
          </Button>
        </CardTemplate>
      ))}
    </>
  )
}

export default CardLoading
