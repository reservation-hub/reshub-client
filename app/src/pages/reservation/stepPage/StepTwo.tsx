import React, { useEffect } from 'react'
import { RootState } from '@store/store'
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
import {
  getReservation,
  getStylistReservation
} from '@store/actions/reservationAction'
import { StepProps } from './StepOne'
import { fetchAllStylist } from '@store/actions/stylistAction'
import { OrderBy } from '@utils/api/request-response-types/client/Common'
import CardList from '@components/list/CardList'
import Box from '@components/Template/Box'
import CardLoading from '@components/list/CardLoading'
import Paginate from '@components/common/Paginate'
import usePagination from '@utils/hooks/usePagination'
import { AppointmentPicker } from 'react-appointment-picker'
import ReservationCalendar from '@/components/reservation/ReservationCalendar'
import { ScheduleDays } from '@/utils/api/request-response-types/models/Common'

type TestType = {
  id?: number
  stylistId?: number
  reservationStartDay?: string
  reservationEndDay?: string
}

export type AppointmentAttributes = {
  id?: string | number
  number: string | number
  isReserved?: boolean
  isSelected?: boolean
  periods?: number
} | null

const StepTwo = ({ shopId, control }: StepProps) => {
  const dispatch = useDispatch()
  const { reservation, stylist } = useSelector((state: RootState) => state)
  const { pageHandler, page } = usePagination(1)

  const useRange = (from: number, to: number, step = 1): number[] => {
    const arr = []
    for (let i = from; i <= to; i += step) arr.push(i)
    return arr
  }

  const workDay = ['月', '火', '水', '金', '木', '土', '日']
  const day = dayjs().format('YYYY-MM-DD')
  const stylistDay = String(
    reservation.stylistReservation.find((v) => v.id === 1684)?.days
  )
  const findReservation = reservation.shopReservation.values?.find(
    (v) => v.stylistId === 1684
  )?.reservationStartDate
  const reservationDate = reservation.shopReservation.values?.map((v) => ({
    reservationStart: v.reservationStartDate,
    reservationEnd: v.reservationEndDate
  }))

  const test = workDay.filter((v) => stylistDay.includes(v))

  console.log(
    findReservation,
    reservationDate?.filter((v) => v.reservationStart === findReservation),
    test
  )

  const stylistWorkDay = stylistDay
    ? workDay.map((v) =>
        useRange(10, 31).map((v) => ({
          id: v,
          number: v,
          isReserved: v === 10 || v === 11
        }))
      )
    : []

  // workDay.filter(v => stylistDay.includes(v)).map(v => useRange(10, 31).map((v, i) => ({
  //   id: v, number: i, isReserved: i === 0 || i === 1
  // }))) : []

  console.log(stylistWorkDay, reservationDate)
  console.log()

  console.log(
    'stylist reservation',
    reservation.stylistReservation,
    'shop reservation',
    reservation.shopReservation
  )

  useEffect(() => {
    dispatch(
      getReservation({
        shopId: Number(shopId),
        reservationDate: day
      })
    )
    dispatch(getStylistReservation(Number(shopId)))
    dispatch(
      fetchAllStylist({
        shopId: Number(shopId),
        page: 1,
        order: OrderBy.DESC
      })
    )
  }, [])

  return (
    <>
      <Box title='スタイリスト選択' boxClass='pb-4'>
        <div className='flex flex-wrap w-full justify-between px-5 mb-5'>
          {stylist.loading ? (
            <CardLoading price count={10} />
          ) : (
            <>
              {stylist.stylists.map((v, i) => (
                <CardList
                  key={i}
                  icon
                  useReservationForm
                  control={control}
                  name={v.name}
                  price={v.price}
                  id={v.id}
                  buttonText='選択'
                />
              ))}
            </>
          )}
        </div>
      </Box>
      <Paginate
        totalPage={stylist.totalCount}
        page={page}
        pageChangeHandler={pageHandler}
      />

      <ReservationCalendar days={stylistWorkDay} />
    </>
  )
}

export default StepTwo
