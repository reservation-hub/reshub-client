//----------------------------------
// redux action types ユーザー
//----------------------------------
import { UserForAuth } from '@utils/api/request-response-types/models/User'
import { DefaultState } from '../store'

export const AUTH_TYPE = {
  REQUEST_START: 'LOGIN_REQUEST_START',
  REQUEST_SUCCESS: 'LOGIN_REQUEST_SUCCESS',
  REQUEST_FAILURE: 'LOGIN_REQUEST_FAILURE',
  LOGOUT_SUCCESS: 'LOGOUT_REQUEST_SUCCESS'
} as const

export type AuthState = DefaultState & {
  isAuthenticated: boolean
  user: UserForAuth
}
