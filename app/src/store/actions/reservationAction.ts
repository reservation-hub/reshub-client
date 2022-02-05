import apiEndpoint from '@utils/api/apiEndpoint'
import history from '@utils/routers/history'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState, typedAction } from '@store/store'
import { RESERVATION_TYPE } from '@store/types/reservationTypes'
import {
  SalonAvailabilityQuery,
  SalonAvailabilityResponse,
  SalonSetReservationQuery,
  SalonStylistListForReservationResponse
} from '@/utils/api/request-response-types/client/Shop'
import {
  ReservationResponse,
  UserReservationListQuery,
  UserReservationListResponse
} from '@/utils/api/request-response-types/client/User'

const reservationRequestStart = () => {
  return typedAction(RESERVATION_TYPE.REQUEST_START)
}

const getShopReservationSuccess = (data: SalonAvailabilityResponse) => {
  return typedAction(RESERVATION_TYPE.SHOP_RESERVATION, data)
}

const getStylistReservationSuccess = (
  data: SalonStylistListForReservationResponse
) => {
  return typedAction(RESERVATION_TYPE.STYLIST_RESERVATION, {
    data: data.values,
    totalCount: data.totalCount
  })
}

const getUserReservationsSuccess = (
  data: UserReservationListResponse,
  page?: number
) => {
  return typedAction(RESERVATION_TYPE.USER_RESERVATIONS, {
    data: data.values,
    totalCount: data.totalCount,
    page
  })
}

const getUserReservationSuccess = (data: ReservationResponse) => {
  return typedAction(RESERVATION_TYPE.USER_RESERVATION, data)
}

const createReservationSuccess = (data: string) => {
  return typedAction(RESERVATION_TYPE.CREATE_RESERVATION, data)
}

const patchReservationSuccess = (data: string) => {
  return typedAction(RESERVATION_TYPE.PATCH_SUCCESS, data)
}

const deleteReservationSuccess = (data: string) => {
  return typedAction(RESERVATION_TYPE.DELETE_RESERVATION, data)
}

const reservationRequestFailure = (msg: string) => {
  return typedAction(RESERVATION_TYPE.REQUEST_FAILURE, msg)
}

export const getReservation = (
  queryParams: SalonAvailabilityQuery
): ThunkAction<void, RootState, null, Action> => {
  return async (dispatch) => {
    dispatch(reservationRequestStart())
    try {
      const res = await apiEndpoint.reservation.getReservation(queryParams)
      dispatch(getShopReservationSuccess(res.data))
    } catch {
      history.push('/error')
    }
  }
}

export const getStylistReservation = (
  shopId: number
): ThunkAction<void, RootState, null, Action> => {
  return async (dispatch) => {
    dispatch(reservationRequestStart)
    try {
      const res = await apiEndpoint.reservation.getStylistReservation(shopId)
      dispatch(getStylistReservationSuccess(res.data))
    } catch {
      history.push('/error')
    }
  }
}

export const getUserReservations = (
  queryParams?: UserReservationListQuery
): ThunkAction<void, RootState, null, Action> => {
  return async (dispatch) => {
    dispatch(reservationRequestStart())
    try {
      const res = await apiEndpoint.reservation.getUserReservations(queryParams)
      dispatch(getUserReservationsSuccess(res.data, queryParams?.page))
    } catch {
      history.push('/error')
    }
  }
}

export const getUserReservation = (
  reservationId: number
): ThunkAction<void, RootState, null, Action> => {
  return async (dispatch) => {
    dispatch(reservationRequestStart())
    try {
      const res = await apiEndpoint.reservation.getUserReservation(
        reservationId
      )
      dispatch(getUserReservationSuccess(res.data))
    } catch {
      history.push('/error')
    }
  }
}

export const createReservation = (
  reservationData: SalonSetReservationQuery
): ThunkAction<void, RootState, null, Action> => {
  return async (dispatch) => {
    dispatch(reservationRequestStart())
    try {
      const res = await apiEndpoint.reservation.createReservation(
        reservationData
      )
      dispatch(createReservationSuccess(res.data))
    } catch (e: any) {
      const err = e.reseponse.data
      dispatch(reservationRequestFailure(err))
    }
  }
}

export const deleteUserReservation = (
  shopId: number
): ThunkAction<void, RootState, null, Action> => {
  return async (dispatch) => {
    dispatch(reservationRequestStart())
    try {
      const res = await apiEndpoint.reservation.deleteUserReservation(shopId)
      dispatch(createReservationSuccess(res.data))
    } catch (e: any) {
      const err = e.reseponse.data
      dispatch(reservationRequestFailure(err))
    }
  }
}

export type ReservationAction =
  | ReturnType<typeof reservationRequestStart>
  | ReturnType<typeof getShopReservationSuccess>
  | ReturnType<typeof getStylistReservationSuccess>
  | ReturnType<typeof getUserReservationsSuccess>
  | ReturnType<typeof getUserReservationSuccess>
  | ReturnType<typeof createReservationSuccess>
  | ReturnType<typeof patchReservationSuccess>
  | ReturnType<typeof deleteReservationSuccess>
  | ReturnType<typeof reservationRequestFailure>
