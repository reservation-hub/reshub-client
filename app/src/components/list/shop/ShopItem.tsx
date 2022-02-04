import React from 'react'
import SubTitle from '@components/common/SubTitle'
import Card from '@components/Template/Card'
import { Link } from 'react-router-dom'
import { PATHS } from '@constants/paths'
import Tag from '@components/common/Tag'
import { ShopForList } from '@/utils/api/request-response-types/client/models/Shop'
import { IListProps } from '../_PropsType'
import IconText from '@/components/common/IconText'
import { AiOutlineClockCircle, AiOutlinePhone } from 'react-icons/ai'
import { IoCut } from 'react-icons/io5'

const ShopItem = <T extends ShopForList[]>({ item }: IListProps<T>) => {
  const goToShopDetailButton =
    'w-[15rem] p-2 bg-primary text-secondary-light text-center rounded-lg'

  return (
    <section className='px-5 pt-5 pb-2 h-full'>
      {item?.map((item, i) => (
        <Card key={i} classes='w-full border mb-5' shadow>
          <Link className='cursor-pointer' to={`/salon/detail/${item.id}`}>
            <div className='border-b-2 px-5 flex items-center justify-between'>
              <SubTitle text={item?.name} />
              <span>rating/({item.reviewsCount})</span>
            </div>

            <div className='flex px-5 py-3 w-full'>
              <div className='w-[10rem] h-[10rem] border-2'>
                <img src='img/salon.jpeg' alt='' className='w-full h-full' />
              </div>
              <div className='px-5 grid'>
                <span className='lg:text-[1.8rem]'>description</span>
                <span>{item?.address}</span>
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
                  <IconText
                    icon
                    text={`¥${item?.averageMenuPrice.toLocaleString()}`}
                  >
                    <IoCut className='w-[2rem] h-[2rem] mr-1 text-gray-main' />
                  </IconText>
                </div>
              </div>
            </div>
          </Link>

          <div className='flex justify-between items-center mb-5'>
            <div className='flex flex-wrap max-w-lg pl-5'>
              {item?.tags?.map((v: any, i: number) => (
                <Tag key={i}>{v?.slug}</Tag>
              ))}
            </div>
            <div className='px-5'>
              <Link to={PATHS.RESERVATION} className={goToShopDetailButton}>
                空席確認・予約
              </Link>
            </div>
          </div>
        </Card>
      ))}
    </section>
  )
}

export default ShopItem
