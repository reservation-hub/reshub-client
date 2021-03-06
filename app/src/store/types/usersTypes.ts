//----------------------------------
// redux action types お店管理
//----------------------------------
import { UserResponsesWithReservationDetails } from '@utils/api/request-response-types/client/User'
import { DefaultState } from '@store/store'

export const USER_TYPE = {
  REQUEST_START: 'CLIENT_REQUEST_START',
  REQUEST_SUCCESS: 'CLIENT_REQUEST_SUCCESS',
  SIGNUP_SUCCESS: 'CLIENT_SIGNUP_SUCCESS',
  EDIT_SUCCESS: 'CLIENT_EDIT_SUCCESS',
  DELETE_SUCCESS: 'CLIENT_DELETE_SUCCESS',
  REQUEST_FAILURE: 'CLIENT_REQUEST_FAILURE'
} as const

export type UsersState = Readonly<
  DefaultState & {
    user: UserResponsesWithReservationDetails
  }
>
