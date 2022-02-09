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
import { SelectedStylistValue } from '@/components/reservation/_PropsTypes'

const StepTwo = ({ shopId, control }: StepProps) => {
  const dispatch = useDispatch()

  const { reservation, shop } = useSelector((state: RootState) => state)

  const [selectedStylist, setSelectedStylist] = useState<SelectedStylistValue>({
    stylistId: null,
    stylistName: ''
  })

  Cookies.set('selectedStylist', selectedStylist)

  console.log(shop.schedule, Array(shop.schedule.days))

  const stylistForThisReservation = reservation.stylistReservation.find(
    (s) => s.id === selectedStylist.stylistId
  )

  const parse = JSON.parse(String(Cookies.get('selectedMenu')))

  const duration = parse.menuDuration ?? 60

  const shopSeats = selectedStylist.stylistId ? 1 : shop.schedule.seats

  const { convertToValues, reservationDate, calendarDays } = useCalendarValues(
    reservation.shopReservation.values,
    Number(selectedStylist.stylistId),
    duration,
    shopSeats,
    Number(shopId),
    stylistForThisReservation
  )

  const calendarValues = calendarDays.map((dayOfTheWeek, index) =>
    convertToValues(dayOfTheWeek, index)
  )

  console.log(calendarValues)

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
                  setState={setSelectedStylist}
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
