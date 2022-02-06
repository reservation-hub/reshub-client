import React, { useEffect } from 'react'
import MainTemplate from '@/components/Template/MainTemplate'
import { RootState } from '@/store/store'
import { useDispatch, useSelector } from 'react-redux'
import Section from '@/components/Template/Section'
import { getUser } from '@/store/actions/userAction'
import { getUserReservations } from '@/store/actions/reservationAction'
import { OrderBy } from '@/utils/api/request-response-types/client/Common'
import { UserResponse } from '@/utils/api/request-response-types/client/User'
import MypageMenu from '@/components/detail/user/MypageMenu'
import {
  ReservationForList,
  ReservationStatus
} from '@/utils/api/request-response-types/client/models/Reservation'
import MypageTop from '@/components/detail/user/MypageTop'

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

  const { user, reservation } = useSelector((state: RootState) => ({
    user: state.user,
    reservation: state.reservation
  }))

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

  console.log(subItems)

  const fetchAll = async () => {
    return await Promise.all([
      dispatch(getUser()),
      dispatch(
        getUserReservations({
          page: 1,
          order: OrderBy.DESC,
          take: 3
        })
      )
    ])
  }

  useEffect(() => {
    fetchAll()
  }, [])

  return (
    <MainTemplate>
      <Section classes='w-[100rem] mx-auto'>
        <span className='mb-2 text-gray-main'>
          こんにちは{user.user.username}さん
        </span>
        <div className='flex'>
          <MypageMenu />

          <MypageTop item={rowItem} subItems={subItems} />
        </div>
      </Section>
    </MainTemplate>
  )
}

export default MyPage
