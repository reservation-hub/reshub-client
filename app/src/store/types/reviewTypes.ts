import { Review } from '@/utils/api/request-response-types/client/models/Review'
import { DefaultState } from '../store'

export const REVIEW_TYPE = {
  REQUEST_START: 'REVIEW_REQUEST_START',
  GET_REVIEWS: 'REVIEWS_GET_SUCCESS',
  GET_REVIEW: 'REVIEW_GET_SUCCESS',
  CREATE_REVIEW: 'REVIEW_CREATE_SUCCESS',
  PATCH_REVIEW: 'REVIEW_PATCH_SUCCESS',
  DELETE_REVIEW: 'REVIEW_DELETE_SUCCESS',
  REQUEST_FAILURE: 'REVIEW_REQUEST_FAILURE'
} as const

export type ReviewState = Readonly<
  DefaultState & {
    reviews: Review[]
    review: Review
    totalCount: number
    page?: number
  }
>
