import {
  UserReviewListQuery,
  UserReviewUpdateQuery
} from '@utils/api/request-response-types/client/User'
import apiEndpoint from '@utils/api/apiEndpoint'
import { Review } from '@utils/api/request-response-types/client/models/Review'
import {
  SalonReviewDeleteQuery,
  SalonReviewInsertQuery,
  SalonReviewListQuery,
  SalonReviewListResponse,
  SalonReviewUpdateQuery
} from '@utils/api/request-response-types/client/Shop'
import history from '@utils/routers/history'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState, typedAction } from '../store'
import { REVIEW_TYPE } from '../types/reviewTypes'

const reviewRequestStart = () => {
  return typedAction(REVIEW_TYPE.REQUEST_START)
}

const getShopReviewsSuccess = (
  data: SalonReviewListResponse,
  page?: number
) => {
  return typedAction(REVIEW_TYPE.SHOP_REVIEWS, {
    data: data.values,
    totalCount: data.totalCount,
    page
  })
}

const getShopReviewSuccess = (data: Review) => {
  return typedAction(REVIEW_TYPE.SHOP_REVIEW, data)
}

const getUserReviewsSuccess = (
  data: SalonReviewListResponse,
  page?: number
) => {
  return typedAction(REVIEW_TYPE.USER_REVIEWS, {
    data: data.values,
    totalCount: data.totalCount,
    page
  })
}

const getUserReviewSuccess = (data: Review) => {
  return typedAction(REVIEW_TYPE.USER_REVIEW, data)
}

const createReviewSuccess = (msg: string) => {
  return typedAction(REVIEW_TYPE.CREATE_REVIEW, msg)
}

const patchReviewSuccess = (msg: string) => {
  return typedAction(REVIEW_TYPE.PATCH_REVIEW, msg)
}

const deleteReviewSuccess = (msg: string) => {
  return typedAction(REVIEW_TYPE.DELETE_REVIEW, msg)
}

const reviewRequestFailure = (msg: string) => {
  return typedAction(REVIEW_TYPE.REQUEST_FAILURE, msg)
}

export const getShopReviews = (
  queryParams: SalonReviewListQuery
): ThunkAction<void, RootState, null, Action> => {
  return async (dispatch) => {
    dispatch(reviewRequestStart())
    try {
      const res = await apiEndpoint.review.getReviews(queryParams)
      dispatch(getShopReviewsSuccess(res.data, queryParams?.page))
    } catch {
      history.push('/error')
    }
  }
}

export const getShopReview = (
  shopId: number,
  reviewId: number
): ThunkAction<void, RootState, null, Action> => {
  return async (dispatch) => {
    dispatch(reviewRequestStart())
    try {
      const res = await apiEndpoint.review.getReview(shopId, reviewId)
      dispatch(getShopReviewSuccess(res.data))
    } catch {
      history.push('/error')
    }
  }
}

export const getUserReviews = (
  queryParams: UserReviewListQuery
): ThunkAction<void, RootState, null, Action> => {
  return async (dispatch) => {
    dispatch(reviewRequestStart())
    try {
      const res = await apiEndpoint.users.getReviews(queryParams)

      dispatch(getUserReviewsSuccess(res.data, queryParams?.page))
    } catch {
      history.push('/error')
    }
  }
}

export const getUserReview = (
  reviewId: number
): ThunkAction<void, RootState, null, Action> => {
  return async (dispatch) => {
    dispatch(reviewRequestStart())
    try {
      const res = await apiEndpoint.users.getReview(reviewId)
      dispatch(getUserReviewSuccess(res.data))
    } catch {
      history.push('/error')
    }
  }
}

export const createReview = (
  queryParams: SalonReviewInsertQuery
): ThunkAction<void, RootState, null, Action> => {
  return async (dispatch) => {
    dispatch(reviewRequestStart())
    try {
      const res = await apiEndpoint.review.createReview(queryParams)
      dispatch(createReviewSuccess(res.data))
    } catch (e: any) {
      dispatch(reviewRequestFailure(e))
    }
  }
}

export const patchReview = (
  queryParams: SalonReviewUpdateQuery
): ThunkAction<void, RootState, null, Action> => {
  return async (dispatch) => {
    dispatch(reviewRequestStart())
    try {
      const res = await apiEndpoint.review.patchReview(queryParams)
      dispatch(patchReviewSuccess(res.data))
    } catch (e: any) {
      dispatch(reviewRequestFailure(e))
    }
  }
}

export const deleteReview = (
  queryParams: SalonReviewDeleteQuery
): ThunkAction<void, RootState, null, Action> => {
  return async (dispatch) => {
    dispatch(reviewRequestStart())
    try {
      const res = await apiEndpoint.review.deleteReview(queryParams)
      dispatch(deleteReviewSuccess(res.data))
    } catch (e: any) {
      dispatch(reviewRequestFailure(e))
    }
  }
}

export type ReviewAction =
  | ReturnType<typeof reviewRequestStart>
  | ReturnType<typeof getShopReviewsSuccess>
  | ReturnType<typeof getShopReviewSuccess>
  | ReturnType<typeof getUserReviewsSuccess>
  | ReturnType<typeof getUserReviewSuccess>
  | ReturnType<typeof createReviewSuccess>
  | ReturnType<typeof patchReviewSuccess>
  | ReturnType<typeof deleteReviewSuccess>
  | ReturnType<typeof reviewRequestFailure>
