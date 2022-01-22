import apiEndpoint from '@utils/api/apiEndpoint'
import history from '@utils/routes/history'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState, typedAction } from '@store/store'
import { RESERVATION_TYPE } from '@store/types/reservationTypes'
import {
  InsertShopReservationQuery,
  ReservationListResponse,
  ReservationResponse,
  UpdateShopReservationQuery
} from '@utils/api/request-response-types/Shop'

const reservationRequestStart = () => {
  return typedAction(RESERVATION_TYPE.REQUEST_START)
}

const reservationsRequestSuccess = (data: ReservationListResponse) => {
  return typedAction(RESERVATION_TYPE.REQUSET_SUCCESS, data)
}

const reservationForCalendarSuccess = (data: ReservationListResponse) => {
  return typedAction(RESERVATION_TYPE.FOR_CALENDAR, data)
}

const reservationGetSuccess = (data: ReservationResponse) => {
  return typedAction(RESERVATION_TYPE.GET_ONE_SUCCESS, data)
}

const reservationAddSuccess = (data: string) => {
  return typedAction(RESERVATION_TYPE.ADD_SUCCESS, data)
}

const reservationPatchSuccess = (data: string) => {
  return typedAction(RESERVATION_TYPE.PATCH_SUCCESS, data)
}

const reservationDeleteSuccess = (data: string) => {
  return typedAction(RESERVATION_TYPE.DELETE_SUCCESS, data)
}

const reservationRequestFailure = (err: string) => {
  return typedAction(RESERVATION_TYPE.REQUEST_FAILURE, err)
}

export const fetchReservations =
  (
    shopId: number,
    page: number,
    order?: string
  ): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(reservationRequestStart())
    try {
      const res = await apiEndpoint.reservation.fetchReservations(
        shopId,
        page,
        order
      )
      dispatch(reservationsRequestSuccess(res.data))
    } catch {
      history.push('/error')
    }
  }

export const fetchReservationsForCalendar =
  (
    shopId: number,
    year: number,
    month: number
  ): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(reservationRequestStart())
    try {
      const res = await apiEndpoint.reservation.fetchReservationsForCalendar(
        shopId,
        year,
        month
      )
      dispatch(reservationForCalendarSuccess(res.data))
    } catch {
      history.push('/error')
    }
  }

export const getReservation =
  (
    shopId: number,
    reservationId: number
  ): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(reservationRequestStart)
    try {
      const res = await apiEndpoint.reservation.getReservation(
        shopId,
        reservationId
      )
      dispatch(reservationGetSuccess(res.data))
    } catch {
      history.push('/error')
    }
  }

export const createReservation =
  (
    reservationData: InsertShopReservationQuery
  ): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(reservationRequestStart())
    try {
      const res = await apiEndpoint.reservation.createReservation(
        reservationData
      )
      dispatch(reservationAddSuccess(res.data))
      history.push('/reservation', { currentPage: 1 })
    } catch (e: any) {
      const err = e.reseponse.data
      dispatch(reservationRequestFailure(err))
    }
  }

export const patchReservation =
  (
    reservationData: UpdateShopReservationQuery
  ): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(reservationRequestStart())
    try {
      const res = await apiEndpoint.reservation.patchReservation(
        reservationData
      )
      dispatch(reservationPatchSuccess(res.data))
      history.push(`/reservation/${reservationData.reservationId}`)
    } catch (e: any) {
      const err = e.response.data
      dispatch(reservationRequestFailure(err))
    }
  }

export const deleteReservation =
  (shopId: number, id: number): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(reservationRequestStart())
    try {
      const res = await apiEndpoint.reservation.deleteReservation(shopId, id)
      dispatch(reservationDeleteSuccess(res.data))
      history.push('/reservation', { currentPage: 1 })
    } catch (e: any) {
      const err = e.response.data
      dispatch(reservationRequestFailure(err))
    }
  }

export type ReservationAction =
  | ReturnType<typeof reservationRequestStart>
  | ReturnType<typeof reservationsRequestSuccess>
  | ReturnType<typeof reservationForCalendarSuccess>
  | ReturnType<typeof reservationGetSuccess>
  | ReturnType<typeof reservationAddSuccess>
  | ReturnType<typeof reservationPatchSuccess>
  | ReturnType<typeof reservationDeleteSuccess>
  | ReturnType<typeof reservationRequestFailure>
