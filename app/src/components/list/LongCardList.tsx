import React from 'react'
import { Tag } from '@utils/api/request-response-types/client/models/Tag'
import history from '@utils/routers/history'
import Button from '@components/common/Button'
import Image from '@components/common/Image'
import SubTitle from '@components/common/SubTitle'
import Tags from '@components/common/Tag'
import CardTemplate from '@components/Template/CardTemplate'
import { ClassesAndChildren } from '@components/_PropsTypes'
import ReservationInfo from '@components/reservation/list/ReservationInfo'
import ShopInfo from '@components/shop/list/ShopInfo'
import { ReservationStatus } from '@utils/api/request-response-types/client/models/Reservation'
import CheckBox from '@components/common/CheckBox'
import { Control } from 'react-hook-form'
import { SelectedMenuValue } from '@components/reservation/_PropsTypes'

export const pageType = {
  RESERVATION_LIST: 'reservationList',
  MENU_LIST: 'menuList',
  REVIEW_LIST: 'reviewList',
  SHOP_LIST: 'shopList'
}

export interface LongCardListProps extends ClassesAndChildren {
  img?: boolean
  useReservationForm?: boolean
  imgPath?: string
  imgClasses?: string
  link?: string
  buttonLink?: string
  name?: string
  headerSectionText?: string
  description?: string
  address?: string
  time?: string
  tel?: string
  menuName?: string
  stylistName?: string
  buttonText?: string
  price?: number
  shopId?: number
  menuId?: number
  reservationId?: number
  duration?: number
  tags?: Tag[]
  control?: Control<any>
  reservationStatus?: keyof typeof ReservationStatus
  pageType?: keyof typeof pageType
  cancelReservation?: (reservationId: number) => void
  setState?: React.Dispatch<React.SetStateAction<SelectedMenuValue>>
}

const LongCardList = ({
  img,
  useReservationForm,
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
  buttonText,
  buttonLink,
  menuId,
  control,
  pageType,
  duration,
  cancelReservation,
  setState
}: LongCardListProps) => {
  const descStyle =
    pageType === 'SHOP_LIST' ? 'text-pink-500' : 'text-primary-dark'

  return (
    <CardTemplate shadow classes='w-full border mb-5 text-primary-dark'>
      <div className='w-full' onClick={() => link && history.push(link)}>
        <div className='border-b-2 px-5 flex items-center justify-between'>
          <SubTitle text={name} />
          <span>{headerSectionText}</span>
        </div>

        <div className='flex px-5 py-3 w-full'>
          {img && <Image imagePath={imgPath} alt='img' classes={imgClasses} />}

          <div className='px-5 grid'>
            {description && (
              <span className={`${descStyle} lg:text-[1.8rem]`}>
                {description}
              </span>
            )}
            {pageType === 'SHOP_LIST' && (
              <>
                <span>{address}</span>
                <ShopInfo time={time} tel={tel} price={price} />
              </>
            )}
          </div>
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
        {pageType === 'MENU_LIST' && (
          <div className='flex pl-5 text-[1.8rem]'>
            <div className='mr-5'>値段: {price?.toLocaleString()} 円</div>
            <div>時間: {duration} 分</div>
          </div>
        )}
        <div className='px-5'>
          {pageType === 'SHOP_LIST' || pageType === 'MENU_LIST' ? (
            <>
              {useReservationForm ? (
                <div
                  onClick={() =>
                    setState &&
                    setState({
                      menuDuration: Number(duration),
                      menuPrice: Number(price),
                      menuName: name
                    })
                  }
                >
                  <CheckBox
                    name='menuId'
                    id={`menu-${menuId}`}
                    fullWidth
                    control={control}
                    value={String(menuId)}
                    label='このメニューを選択'
                  />
                </div>
              ) : (
                <Button
                  onClick={() =>
                    history.push(String(buttonLink), {
                      shopName: name,
                      shopId: shopId
                    })
                  }
                  classes='w-[20rem] p-2 bg-primary text-secondary-light text-center rounded-lg'
                >
                  {buttonText}
                </Button>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>

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
    </CardTemplate>
  )
}

export default LongCardList
