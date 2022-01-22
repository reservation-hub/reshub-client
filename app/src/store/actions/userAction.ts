//----------------------------------
// redux ユーザー状態管理 action
//----------------------------------
import { USER_TYPE } from '@store/types/usersTypes'
import { RootState, typedAction } from '@store/store'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import apiEndpoint from '@utils/api/apiEndpoint'
import history from '@/utils/routers/history'
import {
  InsertUserQuery,
  UpdateUserQuery,
  UserListResponse,
  UserResponse
} from '@utils/api/request-response-types/User'

const userRequestStart = () => {
  return typedAction(USER_TYPE.REQUEST_START)
}

const userRequestSuccess = (data: UserListResponse) => {
  return typedAction(USER_TYPE.REQUEST_SUCCESS, data)
}

const userGetSuccess = (data: UserResponse) => {
  return typedAction(USER_TYPE.GET_SUCCESS, data)
}

const userAddSuccess = (data: string) => {
  return typedAction(USER_TYPE.ADD_SUCCESS, data)
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

export const fetchUserList =
  (
    page: number,
    order: 'asc' | 'desc'
  ): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(userRequestStart())
    try {
      const res = await apiEndpoint.users.getUsers(page, order)
      dispatch(userRequestSuccess(res.data))
    } catch (e: any) {
      history.push('/error')
    }
  }

export const getOneUser =
  (id: number): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(userRequestStart())
    try {
      const res = await apiEndpoint.users.getUser(id)
      dispatch(userGetSuccess(res.data))
    } catch (e: any) {
      history.push('/error')
    }
  }

export const addUser =
  (userData: InsertUserQuery): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(userRequestStart())
    try {
      const res = await apiEndpoint.users.createUser(userData)
      dispatch(userAddSuccess(res.data))
      history.push({ pathname: '/users', state: { currentPage: 1 } })
    } catch (e: any) {
      const error = e.response.data
      dispatch(userRequestFailure(error))
    }
  }

export const patchUser =
  (userData: UpdateUserQuery): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(userRequestStart())
    try {
      const res = await apiEndpoint.users.patchUser(userData)
      dispatch(userPatchSuccess(res.data))
      history.push(`/users/${userData.id}`)
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
      history.push({ pathname: '/users', state: { currentPage: 1 } })
    } catch (e: any) {
      const error = e.response.data
      dispatch(userRequestFailure(error))
    }
  }

export type UserAction =
  | ReturnType<typeof userRequestStart>
  | ReturnType<typeof userRequestSuccess>
  | ReturnType<typeof userGetSuccess>
  | ReturnType<typeof userAddSuccess>
  | ReturnType<typeof userPatchSuccess>
  | ReturnType<typeof userDeleteSuccess>
  | ReturnType<typeof userRequestFailure>
