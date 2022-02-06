import React, { useEffect } from 'react'
import MainTemplate from '@components/Template/MainTemplate'
import { RootState } from '@store/store'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getUser } from '@store/actions/userAction'
import { getUserReservations } from '@store/actions/reservationAction'
import { OrderBy } from '@utils/api/request-response-types/client/Common'
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

  const { user, reservation } = useSelector(
    (state: RootState) => ({
      user: state.user,
      reservation: state.reservation
    }),
    shallowEqual
  )

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
    dispatch(getUser()),
      dispatch(
        getUserReservations({
          page: 1,
          order: OrderBy.ASC,
          take: 3
        })
      )
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
