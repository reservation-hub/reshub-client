import { ReservationForList } from '@utils/api/request-response-types/client/models/Reservation'
import { StylistListForReservation } from '@utils/api/request-response-types/client/models/Stylist'
import { SalonAvailabilityResponse } from '@utils/api/request-response-types/client/Shop'
import { ReservationResponse } from '@utils/api/request-response-types/client/User'
import { DefaultState } from '../store'

export const RESERVATION_TYPE = {
  REQUEST_START: 'RESERVATION_REQUEST_START',
  SHOP_RESERVATION: 'RESERVATION_REQUEST_SUCCESS',
  STYLIST_RESERVATION: 'STYLIST_RESERVATION_GET_SUCCESS',
  USER_RESERVATIONS: 'USER_RESERVATIONS_GET_SUCCESS',
  USER_RESERVATION: 'USER_RESERVATION_GET_SUCCESS',
  CREATE_RESERVATION: 'RESERVATION_CREATE_SUCCESS',
  PATCH_SUCCESS: 'PATCH_SUCCESS',
  DELETE_RESERVATION: 'RESERVATION_DELETE_SUCCESS',
  REQUEST_FAILURE: 'RESERVATION_REQUEST_FAILURE'
} as const

export type ReservationState = Readonly<
  DefaultState & {
    shopReservation: SalonAvailabilityResponse
    stylistReservation: StylistListForReservation[]
    userReservations: ReservationForList[]
    userReservation: ReservationResponse
    totalCount: number
    page?: number
  }
>
