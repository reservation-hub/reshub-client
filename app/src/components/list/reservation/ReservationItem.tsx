import React from 'react'
import LinkCard from '@/components/common/LinkCard'
import SubTitle from '@/components/common/SubTitle'
import { PATHS } from '@/constants/paths'
import {
  ReservationForList,
  ReservationStatus
} from '@/utils/api/request-response-types/client/models/Reservation'
import { Items } from '@components/list/_PropsType'
import useConvertStatus from '@/utils/hooks/useConvertStatus'
import useConvertTime from '@utils/hooks/useConvertTime'

const ReservationItem = <T extends ReservationForList>({ item }: Items<T>) => {
  const statusColor =
    item?.status === ReservationStatus.RESERVED
      ? 'bg-yellow-400'
      : item?.status === ReservationStatus.COMPLETED
      ? 'bg-green-400'
      : 'bg-error-light'
  
  const textSize = 'lg:text-[1.6rem] text-[1.2rem]'

  return (
    <LinkCard
      classes='lg:m-5 mt-4 border rounded-lg'
      url={`${PATHS.USER}/reservations/${item?.id}`}
      shadow
    >
      <div className='flex justify-between p-5'>
        <div>
          <SubTitle text={item?.shopName} />
          <div className='flex items-center'>
            <div className={`${textSize} mr-5 mt-4 text-gray-main`}>
              <p>予約したメニュー</p>
              <hr />
              <p className='text-primary-dark'>{item?.menuName}</p>
            </div>
            <div className='mt-4 text-gray-main'>
              <p>担当スタイリスト</p>
              <hr />
              <p className='text-primary-dark'>{item?.stylistName}</p>
            </div>
          </div>
        </div>

        <div className='grid h-full'>
          <span className={`${textSize} text-gray-main`}>
            予約日:
            <span className='text-primary-dark'>
              {useConvertTime('ymdhm', item?.reservationDate)}
            </span>
          </span>
          <span
            className={`${statusColor} rounded-lg mt-14 p-2 text-center text-secondary-light`}
          >
            {useConvertStatus(item?.status)}
          </span>
        </div>
      </div>
    </LinkCard>
  )
}

export default ReservationItem
