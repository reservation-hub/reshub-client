import React, { useEffect } from 'react'
import MainTemplate from '@components/Template/MainTemplate'
import { RootState } from '@store/store'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '@store/actions/userAction'
import { UserResponse } from '@utils/api/request-response-types/client/User'
import MypageMenu from '@components/detail/user/MypageMenu'
import {
  ReservationForList,
  ReservationStatus
} from '@utils/api/request-response-types/client/models/Reservation'
import MypageTop from '@components/detail/user/MypageTop'

export type UserDetail = UserResponse & {
  kanaName: string
}

export type MypageSubItems = {
  reservation: ReservationForList[]
  visitedShop: {
    id: number
    name: string
    visitedDay: string
  }[]
}

const MyPage = () => {
  const dispatch = useDispatch()

  const { user, reservation } = useSelector((state: RootState) => state)

  const rowItem = {
    ...user.user,
    kanaName: `${user.user?.firstNameKana} ${user.user?.lastNameKana}`
  } as UserDetail

  const subItems: MypageSubItems = {
    reservation: reservation.userReservations,
    visitedShop: reservation.userReservations
      .filter((v) => v.status === ReservationStatus.COMPLETED)
      .map((v) => ({
        id: v.id,
        name: v.shopName,
        visitedDay: v.reservationDate
      }))
  }

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  return (
    <MainTemplate>
      <div className='lg:flex'>
        <MypageMenu />

        <MypageTop item={rowItem} subItems={subItems} />
      </div>
    </MainTemplate>
  )
}

export default MyPage
