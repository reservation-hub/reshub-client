//-----------------------------------------------
// users
//-----------------------------------------------
import instance from '@utils/api'
import { AxiosResponse } from 'axios'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import {
  InsertUserQuery,
  UpdateUserPasswordQuery,
  UpdateUserQuery,
  UserResponse
} from '@request-response-types/client/User'

export const getUser = async (): Promise<AxiosResponse<UserResponse>> => {
  return await instance.get<UserResponse>(`${baseEndpoint.users}/`)
}

export const createUser = async (
  userData: InsertUserQuery
): Promise<AxiosResponse<string>> => {
  return await instance.post<string>(`${baseEndpoint.users}/create`, {
    ...userData
  })
}

export const patchUser = async (
  id: number,
  userData: UpdateUserQuery
): Promise<AxiosResponse<string>> => {
  return await instance.patch<string>(`${baseEndpoint.users}/${id}`, {
    ...userData
  })
}

export const deleteUser = async (
  id: number
): Promise<AxiosResponse<string>> => {
  return await instance.delete<string>(`${baseEndpoint.users}/${id}`)
}

export const changePassword = async (
  password: UpdateUserPasswordQuery
): Promise<AxiosResponse<string>> => {
  return await instance.patch<string>(
    `${baseEndpoint.users}/password`,
    password
  )
}

const users = {
  getUser,
  createUser,
  patchUser,
  deleteUser,
  changePassword
}

export default users
