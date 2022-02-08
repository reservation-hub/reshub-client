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
import days from '@constants/days'

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
  const reservationDate = new Date()
  const calendarDays = Array(7).fill('').map((cd, i) => days[reservationDate.getDay() + i])
  const useRange = (from: number, to: number, step = 1): number[] => {
    const arr = []
    for (let i = from; i <= to; i += step) arr.push(i)
    return arr
  }
  const stylistDay = String(
    reservation.stylistReservation.find((v) => v.id === 2478)?.days
  )
  const findReservation = reservation.shopReservation.values?.find(
    (v) => v.stylistId === 2478
  )?.reservationStartDate
  const reservationDates = reservation.shopReservation.values?.map((v) => ({
    reservationStart: v.reservationStartDate,
    reservationEnd: v.reservationEndDate
  }))

  const stylistWorkDays = days.filter(v => stylistDay.includes(v))
  

  console.log(
    'TEST', 
    reservation.shopReservation,
    findReservation,
    reservationDates?.filter((v) => v.reservationStart === findReservation),
    stylistWorkDays
  )

  const calendarValues = stylistDay
    ? calendarDays.map((v, index) =>
        {
          let hour = 9
          return useRange(9, 32).map((v) => {
            const date = new Date(
              reservationDate.getFullYear(),
              reservationDate.getMonth(),
              reservationDate.getDate() + index,
              v % 2 === 0 ? hour++ : hour,
              v % 2 === 0 ? 30 : 0,
              0
            )
            return {
              id: v,
              number: v,
              isReserved: v === 10 || v === 11,
              date,
              
            }
          })
        }
      )
    : []

  
  console.log(calendarValues, reservationDates)
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
        reservationDate: dayjs(reservationDate).format('YYYY-MM-DD')
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

      <ReservationCalendar days={calendarValues} />
    </>
  )
}

export default StepTwo
