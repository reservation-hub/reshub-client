import React from 'react'
import { AiOutlineClockCircle, AiOutlinePhone } from 'react-icons/ai'
import { IoCut } from 'react-icons/io5'
import IconText from '../../common/IconText'
import { IListProps } from '../_PropsType'

const ShopInfo = ({ item }: IListProps) => {
  return (
    <div className='flex flex-wrap items-center'>
      <IconText
        icon
        text={`${item?.startTime} - ${item?.endTime}`}
        classes='mr-5'
      >
        <AiOutlineClockCircle className='w-[2rem] h-[2rem] mr-1 text-gray-main' />
      </IconText>
      <IconText icon text='090-1234-1234' classes='mr-5'>
        <AiOutlinePhone className='w-[2rem] h-[2rem] mr-1 text-gray-main' />
      </IconText>
      <IconText icon text={`¥${item?.averageMenuPrice.toLocaleString()}`}>
        <IoCut className='w-[2rem] h-[2rem] mr-1 text-gray-main' />
      </IconText>
    </div>
  )
}

export default ShopInfo
