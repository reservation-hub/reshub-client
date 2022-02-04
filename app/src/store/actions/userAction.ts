//----------------------------------
// redux ユーザー状態管理 action
//----------------------------------
import { USER_TYPE } from '@store/types/usersTypes'
import { RootState, typedAction } from '@store/store'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import apiEndpoint from '@utils/api/apiEndpoint'
import history from '@utils/routers/history'
import { UserResponse } from '@utils/api/request-response-types/User'
import {
  InsertUserQuery,
  UpdateUserQuery
} from '@request-response-types/client/User'

const userRequestStart = () => {
  return typedAction(USER_TYPE.REQUEST_START)
}

const userRequestSuccess = (data: UserResponse) => {
  return typedAction(USER_TYPE.REQUEST_SUCCESS, data)
}

const userSignupSuccess = (data: string) => {
  return typedAction(USER_TYPE.SIGNUP_SUCCESS, data)
}

const userPatchSuccess = (data: string) => {
  return typedAction(USER_TYPE.EDIT_SUCCESS, data)
}

const userDeleteSuccess = (msg: string) => {
  return typedAction(USER_TYPE.DELETE_SUCCESS, msg)
}

const userRequestFailure = (err: string) => {
  return typedAction(USER_TYPE.REQUEST_FAILURE, err)
}

export const getOneUser =
  (id: number): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(userRequestStart())
    try {
      const res = await apiEndpoint.users.getUser(id)
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
      history.push('/')
    } catch (e: any) {
      const error = e.response.data
      dispatch(userRequestFailure(error))
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
      history.push(`/mypage/${id}`)
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
