import { AxiosResponse } from 'axios'
import instance from '..'
import { baseEndpoint } from '../apiEndpoint'
import { Review } from '../request-response-types/client/models/Review'
import {
  SalonReviewDeleteQuery,
  SalonReviewInsertQuery,
  SalonReviewListQuery,
  SalonReviewListResponse,
  SalonReviewUpdateQuery
} from '../request-response-types/client/Shop'

export const getReviews = async (
  queryParams: SalonReviewListQuery
): Promise<AxiosResponse<SalonReviewListResponse>> => {
  return await instance.get<SalonReviewListResponse>(
    `${baseEndpoint.shops}/${queryParams.shopId}/reviews${
      queryParams.page
        ? `?page=${queryParams.page}&order=${queryParams.order}&take=${queryParams.take}`
        : ''
    }`
  )
}

export const getReview = async (
  shopId: number,
  reviewId: number
): Promise<AxiosResponse<Review>> => {
  return await instance.get<Review>(
    `${baseEndpoint.shops}/${shopId}/reviews/${reviewId}`
  )
}

export const createReview = async (
  queryParams: SalonReviewInsertQuery
): Promise<AxiosResponse<string>> => {
  return await instance.post<string>(
    `${baseEndpoint.shops}/${queryParams.shopId}/reviews`,
    { ...queryParams.params }
  )
}

export const patchReview = async (
  queryParams: SalonReviewUpdateQuery
): Promise<AxiosResponse<string>> => {
  return await instance.patch<string>(
    `${baseEndpoint.shops}/${queryParams.shopId}/reviews/${queryParams.reviewId}`,
    { ...queryParams.params }
  )
}

export const deleteReview = async (
  queryParams: SalonReviewDeleteQuery
): Promise<AxiosResponse<string>> => {
  return await instance.delete<string>(
    `${baseEndpoint.shops}/${queryParams.shopId}/reviews/${queryParams.reviewId}`
  )
}

const review = {
  getReviews,
  getReview,
  createReview,
  patchReview,
  deleteReview
}

export default review
