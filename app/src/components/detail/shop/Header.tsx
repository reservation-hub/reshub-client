import React from 'react'
import Button from '@/components/common/Button'
import H1 from '@/components/common/H1'
import { PATHS } from '@/constants/paths'
import history from '@/utils/routers/history'
import { IShopDetailProps } from './ShopDetail'
import Tag from '@/components/common/Tag'

const Header = ({ item }: IShopDetailProps) => {
  return (
    <div className='flex justify-between items-center p-5'>
      <div className='flex items-center'>
        <img
          src='/img/salon.jpeg'
          alt=''
          className='w-[10rem] h-[10rem] rounded-lg'
        />

        <div className='pl-5 grid'>
          <H1>{item?.name}</H1>
          <span>
            {item?.prefectureName}
            {item?.cityName}
            {item?.address}
          </span>
          <div className='flex flex-wrap'>
            {item?.tags?.map((v: Record<string, any>, i: number) => (
              <Tag key={i}>{v?.slug}</Tag>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className='mb-5'>
          <Button
            onClick={() => history.push(PATHS.RESERVATION)}
            classes='w-[15rem] p-4 rounded-lg text-secondary-main'
          >
            予約する
          </Button>
        </div>
        <div className='mt-5'>
          <Button
            onClick={() => history.goBack()}
            classes='w-[15rem] bg-secondary-main p-2 rounded-lg text-primary border-none'
          >
            戻る
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Header
