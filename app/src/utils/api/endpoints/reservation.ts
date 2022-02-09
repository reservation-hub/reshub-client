//-----------------------------------------------
// reservation
//-----------------------------------------------
import instance from '@utils/api'
import { AxiosResponse } from 'axios'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import {
  ReservationResponse,
  UserReservationListQuery,
  UserReservationListResponse
} from '../request-response-types/client/User'
import {
  SalonAvailabilityQuery,
  SalonAvailabilityResponse,
  SalonStylistListForReservationResponse,
  SalonSetReservationQuery
} from '../request-response-types/client/Shop'

export const getReservation = async (
  queryParams: SalonAvailabilityQuery
): Promise<AxiosResponse<SalonAvailabilityResponse>> => {
  return await instance.get<SalonAvailabilityResponse>(
    `${baseEndpoint.shops}/${queryParams.shopId}/reservations?reservationDate=${queryParams.reservationDate}`
  )
}

export const getStylistReservation = async (
  shopId: number
): Promise<AxiosResponse<SalonStylistListForReservationResponse>> => {
  return await instance.get<SalonStylistListForReservationResponse>(
    `${baseEndpoint.shops}/${shopId}/stylists/reservation`
  )
}

export const getUserReservations = async (
  queryParams?: UserReservationListQuery
): Promise<AxiosResponse<UserReservationListResponse>> => {
  return await instance.get<UserReservationListResponse>(
    `${baseEndpoint.users}/reservations?page=${queryParams?.page}&order=${queryParams?.order}&take=${queryParams?.take}`
  )
}

export const getUserReservation = async (
  reservationId: number
): Promise<AxiosResponse<ReservationResponse>> => {
  return await instance.get<ReservationResponse>(
    `${baseEndpoint.users}/reservations/${reservationId}`
  )
}

export const deleteUserReservation = async (
  reservationId: number
): Promise<AxiosResponse<string>> => {
  return await instance.delete<string>(
    `${baseEndpoint.users}/reservations/${reservationId}`
  )
}

export const createReservation = async (
  queryParams: SalonSetReservationQuery
): Promise<AxiosResponse<string>> => {
  return await instance.post<string>(
    `${baseEndpoint.shops}/${queryParams.shopId}/reservations`,
    {
      ...queryParams.params
    }
  )
}

const reservation = {
  getReservation,
  getStylistReservation,
  getUserReservations,
  getUserReservation,
  createReservation,
  deleteUserReservation
}

export default reservation
