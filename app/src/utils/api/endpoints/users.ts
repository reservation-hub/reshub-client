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
  UserReviewListQuery,
  UserReviewListResponse,
  ReviewResponse,
  UserResponsesWithReservationDetails
} from '@request-response-types/client/User'

export const getUser = async (): Promise<AxiosResponse<UserResponsesWithReservationDetails>> => {
  return await instance.get<UserResponsesWithReservationDetails>(`${baseEndpoint.users}/`)
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

export const getReviews = async (
  query?: UserReviewListQuery
): Promise<AxiosResponse<UserReviewListResponse>> => {
  return await instance.get<UserReviewListResponse>(
    `${baseEndpoint.users}/reviews?page=${query?.page}&order=${query?.order}&take=${query?.take}`
  )
}

export const getReview = async (
  reviewId: number
): Promise<AxiosResponse<ReviewResponse>> => {
  return await instance.get<ReviewResponse>(
    `${baseEndpoint.users}/reviews/${reviewId}`
  )
}

const users = {
  getUser,
  createUser,
  patchUser,
  deleteUser,
  changePassword,
  getReviews,
  getReview
}

export default users
