//-----------------------------------------------
// reservation
//-----------------------------------------------
import instance from '@utils/api'
import { AxiosResponse } from 'axios'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import {
  InsertShopReservationQuery,
  ReservationListResponse,
  ReservationResponse,
  UpdateShopReservationQuery
} from '@utils/api/request-response-types/Shop'

export const fetchReservations = async (
  shopId: number,
  page: number,
  order?: string
): Promise<AxiosResponse<ReservationListResponse>> => {
  return await instance.get<ReservationListResponse>(
    `${baseEndpoint.shops}/${shopId}/reservation?page=${page}&order=${order}`
  )
}

export const fetchReservationsForCalendar = async (
  shopId: number,
  year: number,
  month: number
): Promise<AxiosResponse<ReservationListResponse>> => {
  return await instance.get<ReservationListResponse>(
    `${baseEndpoint.shops}/${shopId}/reservation/calendar?year=${year}&month=${month}`
  )
}

export const getReservation = async (
  shopId: number,
  reservationId: number
): Promise<AxiosResponse<ReservationResponse>> => {
  return await instance.get<ReservationResponse>(
    `${baseEndpoint.shops}/${shopId}/reservation/${reservationId}`
  )
}

export const createReservation = async (
  resData: InsertShopReservationQuery
): Promise<AxiosResponse<string>> => {
  return await instance.post<string>(
    `${baseEndpoint.shops}/${resData.shopId}/reservation`,
    {
      ...resData
    }
  )
}

export const patchReservation = async (
  resData: UpdateShopReservationQuery
): Promise<AxiosResponse<string>> => {
  return await instance.patch<string>(
    `${baseEndpoint.shops}/${resData.shopId}/reservation/${resData.reservationId}`,
    { ...resData }
  )
}

export const deleteReservation = async (
  shopId: number,
  id: number
): Promise<AxiosResponse<string>> => {
  return await instance.delete<string>(
    `${baseEndpoint.shops}/${shopId}/reservation/${id}`
  )
}

const reservation = {
  fetchReservations,
  fetchReservationsForCalendar,
  getReservation,
  createReservation,
  patchReservation,
  deleteReservation
}

export default reservation
