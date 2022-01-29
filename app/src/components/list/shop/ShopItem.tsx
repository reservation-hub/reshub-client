import React from 'react'
import SubTitle from '@/components/common/SubTitle'
import ShopInfo from '@/components/list/shop/ShopInfo'
import Button from '@/components/common/Button'
import { IListProps } from '../_PropsType'
import LinkCard from '@/components/common/LinkCard'
import history from '@utils/routers/history'

const ShopItem = ({ item }: IListProps) => {
  const goToShopDetailButton =
    'w-[15rem] h-[3.5rem] bg-primary text-secondary-light'

  return (
    <section className='p-5'>
      <LinkCard classes='w-full h-[20rem]' shadow url={`/salon/${item?.id}`}>
        <div className='border-b-2 px-5 flex items-center justify-between'>
          <SubTitle text={item?.name} />
          <span>rating and reviews</span>
        </div>

        <div className='flex px-5 py-3 w-full'>
          <div className='w-[10rem] h-[10rem] border-2'>
            <img src='img/salon.jpeg' alt='' className='w-full h-full' />
          </div>
          <div className='px-5 grid'>
            <span className='lg:text-[1.8rem]'>description</span>
            <span>{`${item?.prefectureName}${item?.cityName}${item?.address}`}</span>
            <ShopInfo />
          </div>
        </div>
        <div className='flex justify-end px-5'>
          <Button
            onClick={() => history.push(`/reservation`)}
            classes={goToShopDetailButton}
          >
            空席確認・予約
          </Button>
        </div>
      </LinkCard>
    </section>
  )
}

export default ShopItem
