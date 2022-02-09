import React, { useCallback } from 'react'
import DataTable from '@components/common/DataTable'
import Box from '@components/Template/Box'
import Cookies from 'js-cookie'
import {
  SelectedMenuValue,
  SelectedStylistValue
} from '@components/reservation/_PropsTypes'
import Button from '@components/common/Button'
import history from '@utils/routers/history'
import { PATHS } from '@constants/paths'

export interface ReservationData {
  name?: string
  shopName?: string
  menuName?: string
  stylistName?: string
  reservationDate?: string
  menuPrice?: string
  stylistPrice?: string
  totalPrice?: string
}

export interface StepThreeProps {
  pageType?: 'step' | 'complete'
  shopName?: string
}

const StepThree = ({ shopName, pageType }: StepThreeProps) => {
  const menu: SelectedMenuValue = JSON.parse(
    String(Cookies.get('selectedMenu'))
  )
  const stylist: SelectedStylistValue = JSON.parse(
    String(Cookies.get('selectedStylist'))
  )
  const reservationDate = Cookies.get('reservationDate')

  const totalPrice = stylist.stylistPrice
    ? Number(stylist.stylistPrice) + Number(menu.menuPrice)
    : Number(menu.menuPrice)

  const rowItem = {
    shopName: shopName,
    stylistName: stylist.stylistName || '指名なし',
    stylistPrice: `${Number(stylist.stylistPrice).toLocaleString()}￥` || '0￥',
    menuName: menu.menuName,
    menuPrice: `${menu.menuPrice?.toLocaleString()}￥`,
    reservationDate: reservationDate,
    totalPrice: `${totalPrice.toLocaleString()}￥`
  } as ReservationData

  const goToList = useCallback(() => {
    Cookies.remove('selectedMenu'),
      Cookies.remove('selectedStylist'),
      Cookies.remove('reservationDate'),
      history.push(PATHS.SHOPS)
  }, [])

  return (
    <>
      {pageType === 'step' ? (
        <div className='mb-8 text-error-dark font-bold grid justify-end text-right'>
          <p>
            まだ予約は完了しておりません。
            下の「予約確定」ボタンを押してください。
          </p>
        </div>
      ) : (
        <div className='mb-8 text-center text-gray-main'>
          <p>ご予約いただき誠にありがとうございます。</p>
          <p>以下の内容でご予約預かりました。</p>
        </div>
      )}
      <Box title='予約内容'>
        <DataTable
          cell={[
            { column: '店舗名', key: 'shopName' },
            { column: '来店日', key: 'reservationDate' },
            { column: 'メニュー名', key: 'menuName' },
            { column: 'メニュー価格', key: 'menuPrice' },
            { column: 'スタイリスト名', key: 'stylistName' },
            { column: '指名料', key: 'stylistPrice' },
            { column: '総お支払い金額', key: 'totalPrice' }
          ]}
          item={rowItem}
          classes='bg-primary text-secondary-light w-[20rem]'
        />
      </Box>
      {pageType === 'complete' && (
        <Button
          onClick={goToList}
          classes='border-none font-bold text-gray-main text-center mt-10 w-full'
        >
          リストに戻る
        </Button>
      )}
    </>
  )
}

export default StepThree
