import React, { useEffect } from 'react'
import MainTemplate from '@components/Template/MainTemplate'
import { RootState } from '@store/store'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '@store/actions/userAction'
import {
  UserResponse,
  VisitedShopsParams
} from '@utils/api/request-response-types/client/User'
import MypageMenu from '@components/user/detail/MypageMenu'
import { ReservationForList } from '@utils/api/request-response-types/client/models/Reservation'
import MypageTop from '@components/user/detail/MypageTop'

export type UserDetail = UserResponse & {
  kanaName: string
}

export type MypageSubItems = {
  reservation: ReservationForList[]
  visitedShop: VisitedShopsParams[]
}

const MyPage = () => {
  const dispatch = useDispatch()

  const { user } = useSelector((state: RootState) => state)

  const rowItem = {
    ...user.user.user,
    kanaName: `${user.user.user?.firstNameKana} ${user.user.user?.lastNameKana}`
  } as UserDetail

  const subItems: MypageSubItems = {
    reservation: user.user.reservations,
    visitedShop: user.user.visitedShops
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
