import React from 'react'
import SubTitle from '@components/common/SubTitle'
import { ReservationForList } from '@utils/api/request-response-types/client/models/Reservation'
import { Items } from '@components/list/_PropsType'

const ReservationInfo = <T extends ReservationForList>({
  item,
  classes
}: Items<T>) => {
  return (
    <div>
      <SubTitle text={item?.shopName} />
      <div className='flex items-center mt-4 lg:m-0'>
        <div className={classes}>
          <p>予約番号</p>
          <hr />
          <p className='text-primary-dark'>{item?.id}</p>
        </div>
        <div className={classes}>
          <p>予約したメニュー</p>
          <hr />
          <p className='text-primary-dark'>{item?.menuName}</p>
        </div>
        <div className={classes}>
          <p>担当スタイリスト</p>
          <hr />
          <p className='text-primary-dark'>{item?.stylistName}</p>
        </div>
      </div>
    </div>
  )
}

export default ReservationInfo
