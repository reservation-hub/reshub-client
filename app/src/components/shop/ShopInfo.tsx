import React from 'react'
import { AiOutlineClockCircle, AiOutlinePhone } from 'react-icons/ai'
import { IoCut } from 'react-icons/io5'
import IconText from '../common/IconText'

const ShopInfo = () => {
  return (
    <div className='flex items-center'>
      <IconText icon text='startTime - endTime' classes='mr-5'>
        <AiOutlineClockCircle className='w-[2rem] h-[2rem] mr-1 text-gray-main' />
      </IconText>
      <IconText icon text='090-1234-1234' classes='mr-5'>
        <AiOutlinePhone className='w-[2rem] h-[2rem] mr-1 text-gray-main' />
      </IconText>
      <IconText icon text='¥100,000'>
        <IoCut className='w-[2rem] h-[2rem] mr-1 text-gray-main' />
      </IconText>
    </div>
  )
}

export default ShopInfo
