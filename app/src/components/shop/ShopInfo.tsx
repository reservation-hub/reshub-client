import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import IconText from '../common/IconText'

const ShopInfo = () => {
  return (
    <div className='text-[1.6rem] mt-2'>
      <div className='flex'>
        <IconText icon text='dummy text' classes='mr-2'>
          <IoLocationOutline className='w-[1.6rem] h-[1.6rem] mr-1' />
        </IconText>
        <IconText icon text='dummy text'>
          <IoLocationOutline className='w-[1.6rem] h-[1.6rem] mr-1' />
        </IconText>
      </div>
      <div className='flex'>
        <IconText icon text='dummy text' classes='mr-2'>
          <IoLocationOutline className='w-[1.6rem] h-[1.6rem] mr-1' />
        </IconText>
        <IconText icon text='dummy text'>
          <IoLocationOutline className='w-[1.6rem] h-[1.6rem] mr-1' />
        </IconText>
      </div>
    </div>
  )
}

export default ShopInfo
