import React from 'react'
import Card from '../Template/Card'
import { IoLocationOutline } from 'react-icons/io5'
import Button from '../common/Button'
import ShopInfo from './ShopInfo'
import SubTitle from '../common/SubTitle'

const ShopsCard = () => {
  const goToShopDetailButton =
    'w-[15rem] h-[3.5rem] text-[1.6rem] bg-primary text-secondary-light absolute right-2 bottom-2'

  return (
    <Card classes='w-[80rem] h-[20rem] my-10 ml-10 relative' shadow>
      <div>
        <div className='border-b-2 h-[4rem]'>
          <SubTitle text='test' />
        </div>

        <div className='flex'>
          <div className='w-[10rem] h-[10rem] border-2 mt-3 ml-3'>
            <img src='' alt='' className='w-full h-full' />
          </div>
          <div className='mt-3 ml-9'>
            <span className='text-[1.8rem]'>
              dummy text dummy text dummy text
            </span>
            <div className='text-[1.6rem]'>
              <span>dummy text</span>
            </div>
            <ShopInfo />
          </div>
        </div>

        <Button classes={goToShopDetailButton}>空席確認・予約</Button>
      </div>
    </Card>
  )
}

export default ShopsCard
