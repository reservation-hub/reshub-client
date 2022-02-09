import DataTable from '@/components/common/DataTable'
import { getUser } from '@/store/actions/userAction'
import { RootState } from '@/store/store'
import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export interface ReservationData {
  name?: string
  shopName?: string
  menuName?: string
  stylistName?: string
  reservationDate?: string
  price?: string
}

export interface StepThreeProps {
  reservationDate: string
  shopName?: string
}

const StepThree = ({ reservationDate, shopName }: StepThreeProps) => {
  const dispatch = useDispatch()
  const { user } = useSelector((state: RootState) => state)
  const menu: { menuName: string; menuDuration: number; menuPrice: number } =
    JSON.parse(String(Cookies.get('selectedMenu')))

  const rowItem = {
    name: user.user.user.username,
    shopName: shopName,
    stylistName: '指名なし',
    menuName: menu.menuName,
    price: `${menu.menuPrice.toLocaleString()}￥`,
    reservationDate: reservationDate
  } as ReservationData

  useEffect(() => {
    dispatch(getUser())
  }, [])

  return (
    <>
      <div className='mb-10 text-error-dark font-bold grid justify-end text-right'>
        <p>
          まだ予約は完了しておりません。
          下の「予約確定」ボタンを押してください。
        </p>
      </div>
      <DataTable
        cell={[
          { column: 'お客様名', key: 'name' },
          { column: '店舗名', key: 'shopName' },
          { column: 'メニュー名', key: 'menuName' },
          { column: 'スタイリスト名', key: 'stylistName' },
          { column: '来店日', key: 'reservationDate' },
          { column: 'お支払い金額', key: 'price' }
        ]}
        item={rowItem}
        classes='bg-primary text-secondary-light w-[20rem]'
      />
    </>
  )
}

export default StepThree
