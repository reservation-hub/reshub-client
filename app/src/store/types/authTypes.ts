//----------------------------------
// redux action types ユーザー
//----------------------------------
import { UserForAuth } from '@utils/api/request-response-types/models/User'

export const AUTH_TYPE = {
  REQUEST_START: 'USER_REQUEST_START',
  REQUEST_SUCCESS: 'USER_REQUEST_SUCCESS',
  REQUEST_FAILURE: 'USER_REQUEST_FAILURE',
  LOGOUT_SUCCESS: 'LOGOUT_REQUEST_SUCCESS'
} as const

export type AuthState = {
  isAuthenticated: boolean
  loading: boolean
  user: UserForAuth
  err?: Record<string, any>
}
