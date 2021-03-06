//----------------------------------
// redux ユーザー状態管理 action
//----------------------------------
import { USER_TYPE } from '@store/types/usersTypes'
import { RootState, typedAction } from '@store/store'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import apiEndpoint from '@utils/api/apiEndpoint'
import history from '@utils/routers/history'
import {
  InsertUserQuery,
  UpdateUserQuery,
  UserResponsesWithReservationDetails
} from '@request-response-types/client/User'
import Cookies from 'js-cookie'
import setAuthToken from '@utils/api/setAuthToken'

const userRequestStart = () => {
  return typedAction(USER_TYPE.REQUEST_START)
}

const userRequestSuccess = (data: UserResponsesWithReservationDetails) => {
  return typedAction(USER_TYPE.REQUEST_SUCCESS, data)
}

const userSignupSuccess = (msg: string) => {
  return typedAction(USER_TYPE.SIGNUP_SUCCESS, msg)
}

const userPatchSuccess = (msg: string) => {
  return typedAction(USER_TYPE.EDIT_SUCCESS, msg)
}

const userDeleteSuccess = (msg: string) => {
  return typedAction(USER_TYPE.DELETE_SUCCESS, msg)
}

const userRequestFailure = (msg: string) => {
  return typedAction(USER_TYPE.REQUEST_FAILURE, msg)
}

export const getUser =
  (): ThunkAction<void, RootState, null, Action> => async (dispatch) => {
    dispatch(userRequestStart())
    try {
      const res = await apiEndpoint.users.getUser()
      dispatch(userRequestSuccess(res.data))
    } catch (e: any) {
      history.push('/error')
    }
  }

export const createUser =
  (userData: InsertUserQuery): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(userRequestStart())
    try {
      const res = await apiEndpoint.users.createUser(userData)
      dispatch(userSignupSuccess(res.data))

      if (res.data) {
        const loginUser = await apiEndpoint.authenticated.localLogin({
          username: userData.username,
          password: userData.password
        })

        Cookies.set('sessionToken', loginUser.data.token, { expires: 1 })
        setAuthToken(loginUser.data.token)
      }
    } catch (e: any) {
      const error = e.response.data
      dispatch(userRequestFailure(error))
    } finally {
      history.push('/welcome')
    }
  }

export const patchUser =
  (
    id: number,
    userData: UpdateUserQuery
  ): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(userRequestStart())
    try {
      const res = await apiEndpoint.users.patchUser(id, userData)
      dispatch(userPatchSuccess(res.data))
      history.push(`/mypage`)
    } catch (e: any) {
      const error = e.response.data
      dispatch(userRequestFailure(error))
    }
  }

export const deleteUser =
  (id: number): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(userRequestStart())
    try {
      const res = await apiEndpoint.users.deleteUser(id)
      dispatch(userDeleteSuccess(res.data))
      history.push('/')
    } catch (e: any) {
      const error = e.response.data
      dispatch(userRequestFailure(error))
    }
  }

export type UserAction =
  | ReturnType<typeof userRequestStart>
  | ReturnType<typeof userRequestSuccess>
  | ReturnType<typeof userSignupSuccess>
  | ReturnType<typeof userPatchSuccess>
  | ReturnType<typeof userDeleteSuccess>
  | ReturnType<typeof userRequestFailure>
