import React, { useEffect, useState } from 'react'
import { RootState } from '@store/store'
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
import {
  getReservation,
  getStylistReservation
} from '@store/actions/reservationAction'
import { StepProps } from './StepOne'
import CardList from '@components/list/CardList'
import Box from '@components/Template/Box'
import CardLoading from '@components/list/CardLoading'
import ReservationCalendar from '@/components/reservation/ReservationCalendar'
import { useCalendarValues } from '@/utils/hooks/useCalendarValues'
import Cookies from 'js-cookie'

const StepTwo = ({ shopId, control, setState }: StepProps) => {
  const dispatch = useDispatch()

  const { reservation } = useSelector((state: RootState) => state)

  const [selectedStylistId, setSelectedStylistId] = useState<number | null>(
    null
  )

  const stylistForThisReservation = reservation.stylistReservation.find(
    (s) => s.id === selectedStylistId
  )

  const parse = JSON.parse(String(Cookies.get('selectedMenu')))

  const duration = parse.menuDuration ?? 60

  const shopSeats = selectedStylistId ? 1 : reservation.shopReservation.seats

  const { convertToValues, reservationDate, calendarDays } = useCalendarValues(
    reservation.shopReservation.values,
    selectedStylistId,
    duration,
    shopSeats,
    stylistForThisReservation
  )

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
  }, [])

  return (
    <>
      <Box title='スタイリスト選択' boxClass='pb-4'>
        <div className='flex flex-wrap w-full justify-between px-5 mb-5'>
          {reservation.loading ? (
            <CardLoading price count={10} />
          ) : (
            <>
              {reservation.stylistReservation.map((v, i) => (
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

      <ReservationCalendar
        name='reservationDate'
        days={calendarValues}
        control={control}
      />
    </>
  )
}

export default StepTwo
