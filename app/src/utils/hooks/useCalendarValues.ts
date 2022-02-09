import React from 'react'
import dayjs from 'dayjs'
import { ReservationForAvailabilityList } from '../api/request-response-types/client/models/Reservation'
import { StylistListForReservation } from '../api/request-response-types/client/models/Stylist'
import { ScheduleDays } from '../api/request-response-types/models/Common'
import days from '@/constants/days'

export const useCalendarValues = (
  salonReservation: ReservationForAvailabilityList[],
  selectedStylistId: number | null,
  menuDuration: number,
  salonSeats: number,
  stylistForThisReservation?: StylistListForReservation
) => {
  const reservationDate = dayjs().toDate()

  const calendarDays = Array(7)
    .fill('')
    .map((_, i) => days[(reservationDate.getDay() + i) % 7])

  const range = (from: number, to: number, step = 1): number[] => {
    const arr = []
    for (let i = from; i <= to; i += step) arr.push(i)

    return arr
  }

  const reservationItems = salonReservation?.map((v) => ({
    id: v.id,
    reservationStart: v.reservationStartDate,
    reservationEnd: v.reservationEndDate,
    stylistId: v.stylistId
  }))

  const stylistReservationIds =
    reservationItems &&
    reservationItems
      .filter((reservations) => reservations.stylistId === selectedStylistId)
      .map((reservations) => reservations.id)

  const convertToValues = (dayOfTheWeek: string, index: number) => {
    let hour = 9
    return range(9, 31).map((v) => {
      const startDate = new Date(
        reservationDate.getFullYear(),
        reservationDate.getMonth(),
        reservationDate.getDate() + index,
        v % 2 === 0 ? hour++ : hour,
        v % 2 === 0 ? 30 : 0,
        0
      )

      const endDate = new Date(startDate.getTime() + menuDuration * 60 * 1000)

      let isReserved = false
      let conflictingReservations: {
        id: number
        reservationStart: string
        reservationEnd: string
        stylistId?: number
      }[] = []

      if (reservationItems) {
        conflictingReservations = reservationItems.filter((rd) => {
          const existingReservationStart = new Date(rd.reservationStart)
          const existingReservationEnd = new Date(rd.reservationEnd)
          return (
            (existingReservationStart <= startDate &&
              startDate < existingReservationEnd) ||
            (existingReservationStart < endDate &&
              endDate <= existingReservationEnd)
          )
        })
      }

      if (conflictingReservations.length >= salonSeats) {
        isReserved = true
      }

      let stylistReserved = false
      if (stylistForThisReservation) {
        conflictingReservations.length
          ? (stylistReserved = conflictingReservations.some(
              (cr) => cr.stylistId === stylistForThisReservation.id
            ))
          : !stylistForThisReservation.days.includes(
              dayOfTheWeek as ScheduleDays
            )
          ? (stylistReserved = true)
          : false
      }

      return {
        id: v,
        number: v,
        isReserved: v === 9 || v === 10 || isReserved || stylistReserved,
        startDate
      }
    })
  }

  return {
    convertToValues,
    reservationItems,
    reservationDate,
    stylistReservationIds,
    calendarDays
  }
}
