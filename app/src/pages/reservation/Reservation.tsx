import MainTemplate from '@/components/Template/MainTemplate'
import { getReservation } from '@/store/actions/reservationAction'
import { RootState } from '@/store/store'
import dayjs from 'dayjs'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

type Test = {
  shopId: string
}

const Reservation = ({ match }: RouteComponentProps<Test>) => {
  const dispatch = useDispatch()
  const { shopId } = match.params

  const { reservation } = useSelector((state: RootState) => state)

  // const day = dayjs().format('YYYY-MM-DD')

  // useEffect(() => {
  //   dispatch(getReservation({
  //     shopId: Number(shopId),
  //     params: {
  //       reservationDate: day
  //     }
  //   }))
  // }, [dispatch])

  return <MainTemplate></MainTemplate>
}

export default Reservation
