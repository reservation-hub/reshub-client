import { PATHS } from '@constants/paths'
import { ReservationForList } from '@utils/api/request-response-types/client/models/Reservation'
import { StylistListForReservation } from '@utils/api/request-response-types/client/models/Stylist'
import { SalonAvailabilityResponse } from '@utils/api/request-response-types/client/Shop'
import { ReservationResponse } from '@utils/api/request-response-types/client/User'
import { ReservationAction } from '@store/actions/reservationAction'
import {
  ReservationState,
  RESERVATION_TYPE
} from '@store/types/reservationTypes'

const initialState: ReservationState = {
  loading: false,
  userReservations: [] as ReservationForList[],
  userReservation: {} as ReservationResponse,
  shopReservation: {} as SalonAvailabilityResponse,
  stylistReservation: [] as StylistListForReservation[],
  totalCount: 0,
  page: 0,
  msg: ''
}

const reservationReducer = (
  state = initialState,
  action: ReservationAction
) => {
  switch (action.type) {
    case RESERVATION_TYPE.REQUEST_START:
      return {
        ...state,
        loading: true
      }
    case RESERVATION_TYPE.SHOP_RESERVATION:
      return {
        ...state,
        loading: false,
        shopReservation: action.payload
      }
    case RESERVATION_TYPE.STYLIST_RESERVATION:
      return {
        ...state,
        loading: false,
        stylistReservation: action.payload.data,
        totalCount: action.payload.totalCount
      }
    case RESERVATION_TYPE.USER_RESERVATIONS:
      return Object.assign({}, initialState, {
        ...state,
        loading: false,
        userReservations:
          location.pathname === `${PATHS.USER}/reservations`
            ? state.userReservations.concat(action.payload.data)
            : action.payload.data,
        totalCount: action.payload.totalCount,
        page: action.payload.page
      })
    case RESERVATION_TYPE.USER_RESERVATION:
      return {
        ...state,
        loading: false,
        userReservation: action.payload
      }
    case RESERVATION_TYPE.DELETE_RESERVATION:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    default:
      return state
  }
}

export default reservationReducer
