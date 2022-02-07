import React from 'react'
import { PATHS } from '@/constants/paths'
import { Tag } from '@/utils/api/request-response-types/client/models/Tag'
import history from '@/utils/routers/history'
import { Link } from 'react-router-dom'
import Button from '../common/Button'
import Image from '../common/Image'
import SubTitle from '../common/SubTitle'
import Tags from '../common/Tag'
import CardTemplate from '../Template/CardTemplate'
import { ClassesAndChildren } from '../_PropsTypes'
import ReservationInfo from './reservation/ReservationInfo'
import ShopInfo from '../shop/list/ShopInfo'
import { ReservationStatus } from '@/utils/api/request-response-types/client/models/Reservation'

export const pageType = {
  RESERVATION_LIST: 'reservationList',
  MENU_LIST: 'menuList',
  REVIEW_LIST: 'reviewList',
  SHOP_LIST: 'shopList'
}

export interface LongCardListProps extends ClassesAndChildren {
  img?: boolean
  imgPath?: string
  imgClasses?: string
  link?: string
  name?: string
  headerSectionText?: string
  description?: string
  address?: string
  price?: number
  time?: string
  tel?: string
  tags?: Tag[]
  shopId?: number
  reservationId?: number
  menuName?: string
  stylistName?: string
  reservationStatus?: keyof typeof ReservationStatus
  pageType?: keyof typeof pageType
  cancelReservation?: (reservationId: number) => void
}

const LongCardList = ({
  img,
  imgPath,
  imgClasses,
  link,
  name,
  headerSectionText,
  description,
  address,
  time,
  tel,
  price,
  tags,
  shopId,
  reservationId,
  menuName,
  stylistName,
  reservationStatus,
  pageType,
  cancelReservation
}: LongCardListProps) => {
  return (
    <CardTemplate shadow classes='w-full border mb-5 text-primary-dark'>
      <Link to={String(link)}>
        <div className='border-b-2 px-5 flex items-center justify-between'>
          <SubTitle text={name} />
          <span>{headerSectionText}</span>
        </div>

        {pageType === 'SHOP_LIST' && (
          <>
            <div className='flex px-5 py-3 w-full'>
              {img && (
                <Image imagePath={imgPath} alt='img' classes={imgClasses} />
              )}

              <div className='px-5 grid'>
                {description && (
                  <span className='lg:text-[1.8rem] text-pink-500'>
                    {description}
                  </span>
                )}
                <span>{address}</span>
                <ShopInfo time={time} tel={tel} price={price} />
              </div>
            </div>

            <div className='flex justify-between items-center mb-5'>
              {tags && (
                <div className='flex flex-wrap max-w-lg pl-5'>
                  {tags?.map((v, i) => (
                    <Tags key={i}>{v.slug}</Tags>
                  ))}
                </div>
              )}
              <div className='px-5'>
                {pageType === 'SHOP_LIST' && (
                  <Button
                    onClick={() =>
                      history.push(`${PATHS.RESERVATION}/${shopId}`, {
                        shopName: name
                      })
                    }
                    classes='w-[15rem] p-2 bg-primary text-secondary-light text-center rounded-lg'
                  >
                    空席確認・予約
                  </Button>
                )}
              </div>
            </div>
          </>
        )}

        {pageType === 'RESERVATION_LIST' && (
          <div className='p-5'>
            <ReservationInfo
              reservationId={reservationId}
              menuName={menuName}
              stylistName={stylistName}
              reservationStatus={reservationStatus}
              cancelReservation={cancelReservation}
              classes='mr-4'
            />
          </div>
        )}
      </Link>
    </CardTemplate>
  )
}

export default LongCardList
