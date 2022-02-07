import React from 'react'
import IconText from '@/components/common/IconText'
import { AiOutlineClockCircle, AiOutlinePhone } from 'react-icons/ai'
import { IoCut } from 'react-icons/io5'
import { LongCardListProps } from '@/components/list/LongCardList'

const ShopInfo = ({ time, tel, price }: LongCardListProps) => {
  return (
    <div className='flex flex-wrap items-center'>
      <IconText icon text={time} classes='mr-5'>
        <AiOutlineClockCircle className='w-8 h-8 mr-1 text-gray-main' />
      </IconText>
      <IconText icon text={tel} classes='mr-5'>
        <AiOutlinePhone className='w-8 h-8 mr-1 text-gray-main' />
      </IconText>
      <IconText icon text={`¥${Number(price).toLocaleString()}`}>
        <IoCut className='w-8 h-8 mr-1 text-gray-main' />
      </IconText>
    </div>
  )
}

export default ShopInfo
