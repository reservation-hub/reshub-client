import React from 'react'
import Card from '../Template/Card'
import Button from '../common/Button'
import ShopInfo from './ShopInfo'
import SubTitle from '../common/SubTitle'

const ShopsCard = () => {
  const goToShopDetailButton =
    'w-[15rem] h-[3.5rem] bg-primary text-secondary-light'

  return (
    <Card classes='w-full h-[20rem] relative' shadow>
      <div className='border-b-2 px-5 flex items-center justify-between'>
        <SubTitle text='shop name' />
        <span>rating and reviews</span>
      </div>

      <div className='flex px-5 py-3 w-full'>
        <div className='w-[10rem] h-[10rem] border-2'>
          <img src='img/salon.jpeg' alt='' className='w-full h-full' />
        </div>
        <div className='px-5 grid'>
          <span className='text-[1.8rem]'>description</span>
          <div className=''>
            <span>address</span>
          </div>
          <ShopInfo />
        </div>
      </div>

      <div className='flex justify-end px-5'>
        <Button classes={goToShopDetailButton}>空席確認・予約</Button>
      </div>
    </Card>
  )
}

export default ShopsCard
