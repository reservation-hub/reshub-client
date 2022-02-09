import React from 'react'
import dayjs from 'dayjs'
import { AppointmentPicker } from 'react-appointment-picker'
import Box from '@components/Template/Box'
import { useController } from 'react-hook-form'
import {
  AddedAppointment,
  AppointmentAttributes,
  ContinuousAddCase,
  RemoveCallback
} from '@components/reservation/_PropsTypes'
import { InputProps } from '@components/_PropsTypes'
import Cookies from 'js-cookie'

export interface ReservationCalendarProps extends InputProps {
  days: AppointmentAttributes[][]
}

const ReservationCalendar = ({
  days,
  control,
  name
}: ReservationCalendarProps) => {
  const initialDay = new Date(dayjs().format('YYYY-MM-DD'))

  const { field } = useController({ control, name })

  const addAppointmentCallbacks = ({
    addedAppointment: { day, number, time, id },
    addCb,
    removedAppointment: params,
    removeCb
  }: ContinuousAddCase): void => {
    if (removeCb) removeCb(params!.day, params!.number)
    const startDate = days.find((v) => v)?.find((s) => s?.id === id)?.startDate
    Cookies.set('reservationDate', dayjs(startDate).format('YYYY-MM-DD HH:mm'))
    field.onChange(dayjs(startDate).format('YYYY-MM-DD HH:mm:ss'))

    addCb(day, number, time, id)
  }

  const removeAppointmentCallbackContinuousCase = (
    params: AddedAppointment,
    removeCb: RemoveCallback
  ) => {
    field.onChange('')
    removeCb(params.day, params.number)
  }

  return (
    <Box title='日付を選択' boxClass='mt-12 text-center'>
      <div className='mb-5'>
        <span className='text-gray-main'>{dayjs().format('YYYY年MM月')}</span>
      </div>
      <AppointmentPicker
        addAppointmentCallback={addAppointmentCallbacks}
        removeAppointmentCallback={removeAppointmentCallbackContinuousCase}
        days={days}
        initialDay={initialDay}
        maxReservableAppointments={1}
        unitTime={60 * 30 * 1000}
        visible
        alpha
        selectedByDefault
        continuous
        local='ja-JP'
      />
    </Box>
  )
}

export default ReservationCalendar
