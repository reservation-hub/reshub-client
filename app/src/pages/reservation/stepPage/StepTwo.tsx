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

export type AppointmentAttributes = {
  id?: string | number
  number: string | number
  isReserved?: boolean
  isSelected?: boolean
  periods?: number
} | null

const StepTwo = ({ shopId, control }: StepProps) => {
  const dispatch = useDispatch()
  const { reservation, stylist, menus } = useSelector((state: RootState) => state)
  const { pageHandler, page } = usePagination(1)
  const reservationDate = new Date()
  const calendarDays = Array(7).fill('').map((cd, i) => days[(reservationDate.getDay() + i) % 7])
  const useRange = (from: number, to: number, step = 1): number[] => {
    const arr = []
    for (let i = from; i <= to; i += step) arr.push(i)
    return arr
  }
  const reservationDates = reservation.shopReservation.values?.map((v) => ({
    id: v.id,
    reservationStart: v.reservationStartDate,
    reservationEnd: v.reservationEndDate,
    stylistId: v.stylistId
  }))

  const selectedStylistId = 2478
  const stylistForThisReservation = reservation.stylistReservation.find(s => s.id === selectedStylistId)
  console.log('STYLIST FOR THIS RESERVATION', stylistForThisReservation)
  console.log(reservation.shopReservation)

  // TODO change this to actual duration of selected menu
  const sampleDuration = 60

  // TODO change this to actual shop seats
  const shopSeats = 1
  
  const stylistReservationIds = reservationDates && reservationDates.filter(rd => rd.stylistId === selectedStylistId).map(rd => rd.id)
  console.log('stylist reservation ids : ', stylistReservationIds)
  

  const calendarValues = calendarDays.map((dayOfTheWeek, index) =>
    {
      let hour = 9
      return useRange(9, 32).map((v) => {
        const startDate = new Date(
          reservationDate.getFullYear(),
          reservationDate.getMonth(),
          reservationDate.getDate() + index,
          v % 2 === 0 ? hour++ : hour,
          v % 2 === 0 ? 30 : 0,
          0
        )
        const endDate = new Date(startDate.getTime() + (sampleDuration * 60 * 1000))
        let isReserved = false
        let conflictingReservations: { id: number, reservationStart: string, reservationEnd: string, stylistId?: number }[] = []
        if (reservationDates) {
          conflictingReservations = reservationDates.filter(rd => {
            const existingReservationStart = new Date(rd.reservationStart)
            const existingReservationEnd = new Date(rd.reservationEnd)
            return (existingReservationStart <= startDate && startDate < existingReservationEnd ) ||
              (existingReservationStart < endDate && endDate <= existingReservationEnd)
          })
        }
        if (conflictingReservations.length >= shopSeats) {
          isReserved = true
        }

        let stylistReserved = false
        if (stylistForThisReservation) {
          if (conflictingReservations.length) {
            stylistReserved = conflictingReservations.some(cr => cr.stylistId === stylistForThisReservation.id)
          }
          
          if (!stylistForThisReservation.days.includes(dayOfTheWeek as ScheduleDays)) {
            stylistReserved = true
          }
          
        }

        return {
          id: v,
          number: v,
          isReserved: v === 9 || v === 10 || isReserved || stylistReserved,
          startDate,
        }
      })
    }
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
