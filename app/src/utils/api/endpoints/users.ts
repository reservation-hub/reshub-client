//-----------------------------------------------
// users
//-----------------------------------------------
import instance from '@utils/api'
import { AxiosResponse } from 'axios'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import {
  InsertUserQuery,
  UpdateUserQuery,
  UserListResponse,
  UserResponse
} from '@utils/api/request-response-types/User'

export const getUser = async (
  id: number
): Promise<AxiosResponse<UserResponse>> => {
  return await instance.get<UserResponse>(`${baseEndpoint.users}/${id}`)
}

export const createUser = async (
  userData: InsertUserQuery
): Promise<AxiosResponse<string>> => {
  return await instance.post<string>(baseEndpoint.users, { ...userData })
}

export const patchUser = async (
  userData: UpdateUserQuery
): Promise<AxiosResponse<string>> => {
  return await instance.patch<string>(`${baseEndpoint.users}/${userData.id}`, {
    ...userData.params
  })
}

export const deleteUser = async (
  id: number
): Promise<AxiosResponse<string>> => {
  return await instance.delete<string>(`${baseEndpoint.users}/${id}`)
}

const users = {
  getUser,
  createUser,
  patchUser,
  deleteUser
}

export default users
