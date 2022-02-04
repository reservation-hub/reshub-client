import {
  ReservationListResponse,
  ReservationResponse
} from '@utils/api/request-response-types/Shop'
import { DefaultState } from '../store'

export const RESERVATION_TYPE = {
  REQUEST_START: 'REQUEST_START',
  REQUSET_SUCCESS: 'REQUEST_SUCCESS',
  GET_ONE_SUCCESS: 'GET_ONE_SUCCESS',
  ADD_SUCCESS: 'ADD_SUCCESS',
  PATCH_SUCCESS: 'PATCH_SUCCESS',
  DELETE_SUCCESS: 'DELETE_SUCCESS',
  REQUEST_FAILURE: 'REQUEST_FAILURE'
} as const

export type ReservationState = Readonly<
  DefaultState & {
    reservations: ReservationListResponse
    reservation: ReservationResponse
  }
>
