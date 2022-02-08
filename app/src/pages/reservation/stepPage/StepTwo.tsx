import React, { useEffect, useState } from 'react'
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
import ReservationCalendar from '@/components/reservation/ReservationCalendar'
import days from '@constants/days'
import { useCalendarValues } from '@/utils/hooks/useCalendarValues'

export type AppointmentAttributes = {
  id?: string | number
  number: string | number
  isReserved?: boolean
  isSelected?: boolean
  periods?: number
} | null

export type ReservationType = {
  id: number
  reservationStart: string
  reservationEnd: string
  stylistId?: number
}

const StepTwo = ({ shopId, control }: StepProps) => {
  const dispatch = useDispatch()
  const [selectedStylistId, setSelectedStylistId] = useState<number | null>(
    null
  )

  const { reservation, stylist } = useSelector((state: RootState) => state)
  const { pageHandler, page } = usePagination(1)

  console.log(selectedStylistId)

  const stylistForThisReservation = reservation.stylistReservation.find(
    (s) => s.id === selectedStylistId
  )

  // TODO change this to actual duration of selected menu
  const sampleDuration = 60

  const shopSeats = selectedStylistId ? 1 : reservation.shopReservation.seats

  const { convertToValues, reservationDate } = useCalendarValues(
    reservation.shopReservation.values,
    selectedStylistId,
    sampleDuration,
    shopSeats,
    stylistForThisReservation
  )

  const calendarDays = Array(7)
    .fill('')
    .map((_, i) => days[(reservationDate.getDay() + i) % 7])

  const calendarValues = calendarDays.map((dayOfTheWeek, index) =>
    convertToValues(dayOfTheWeek, index)
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
        page: page,
        order: OrderBy.DESC
      })
    )
  }, [page])

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
                  setState={setSelectedStylistId}
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
