import React, { useCallback, useEffect } from 'react'
import MypageMenu from '@components/user/detail/MypageMenu'
import { RootState } from '@store/store'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteUserReservation,
  getUserReservations
} from '@store/actions/reservationAction'
import useInfiniteScroll from '@utils/hooks/useInfiniteScroll'
import { OrderBy } from '@utils/api/request-response-types/client/Common'
import ReservationList from '@components/user/list/ReservationList'
import SubTemplate from '@components/Template/SubTemplate'

const MyReservation = () => {
  const dispatch = useDispatch()

  const { reservation } = useSelector((state: RootState) => state)

  const { loadMore, more, page } = useInfiniteScroll(reservation.totalCount)

  const rowItems = {
    values: reservation.userReservations,
    totalCount: reservation.totalCount
  }

  const cancelReservation = useCallback(
    (reservationId: number) => {
      dispatch(deleteUserReservation(reservationId))
    },
    [dispatch]
  )

  useEffect(() => {
    dispatch(
      getUserReservations({
        page: page,
        order: OrderBy.DESC,
        take: 10
      })
    )
  }, [dispatch, page])

  return (
    <SubTemplate>
      <div className='flex'>
        <MypageMenu />
        <ReservationList
          useInfiniteScroll={{ loadMore, more, page }}
          item={rowItems}
          loading={reservation.loading}
          cancelReservation={cancelReservation}
        />
      </div>
    </SubTemplate>
  )
}

export default MyReservation
