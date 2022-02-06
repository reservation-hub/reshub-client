import React from 'react'
import CardTemplate from '@/components/Template/CardTemplate'
import { StylistForList } from '@utils/api/request-response-types/client/models/Stylist'
import { BiUserCircle } from 'react-icons/bi'
import Button from '@components/common/Button'
import { Items } from '@components/list/_PropsType'
import Skeleton from '@/components/common/Skeleton'

const StylistItem = <T extends StylistForList[]>({
  item,
  loading
}: Items<T>) => {
  return (
    <div className='flex flex-wrap justify-between px-5 pb-5 text-[1.4rem]'>
      {item?.map((v, i) => (
        <React.Fragment key={i}>
          {loading ? (
            <CardTemplate
              key={i}
              shadow
              classes='grid justify-center mt-5 p-5 rounded-lg border w-[17rem]'
            >
              <Skeleton classes='w-40 h-40 mx-auto' />
              <div className='mt-5'>
                <Skeleton classes='w-40 h-8' />
                <Skeleton classes='w-40 h-8 mt-1' />
              </div>
              <Button classes='mt-4 rounded-lg border-none'>
                <Skeleton classes='w-40 h-8' />
              </Button>
            </CardTemplate>
          ) : (
            <CardTemplate
              key={i}
              shadow
              classes='grid justify-center mt-5 p-5 rounded-lg border w-[17rem]'
            >
              <BiUserCircle className='w-40 h-40 mx-auto' />
              <div className='mt-5'>
                <p>{v.name}</p>
                <p>指名料: {v.price.toLocaleString()}¥</p>
              </div>
              <Button classes='bg-primary text-secondary-light mt-4 rounded-lg border-none'>
                指名して予約
              </Button>
            </CardTemplate>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default StylistItem
