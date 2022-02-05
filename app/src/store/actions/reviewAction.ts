import apiEndpoint from "@/utils/api/apiEndpoint"
import { Review } from "@/utils/api/request-response-types/client/models/Review"
import { SalonReviewDeleteQuery, SalonReviewInsertQuery, SalonReviewListQuery, SalonReviewListResponse, SalonReviewUpdateQuery } from "@/utils/api/request-response-types/client/Shop"
import history from "@/utils/routers/history"
import { Action } from "redux"
import { ThunkAction } from "redux-thunk"
import { RootState, typedAction } from "../store"
import { REVIEW_TYPE } from "../types/reviewTypes"

const reviewRequestStart = () => {
  return typedAction(REVIEW_TYPE.REQUEST_START)
}

const getReviewsSuccess = (data: SalonReviewListResponse, page?: number) => {
  return typedAction(REVIEW_TYPE.GET_REVIEWS, { data: data.values, totalCount: data.totalCount, page })
}

const getReviewSuccess = (data: Review) => {
  return typedAction(REVIEW_TYPE.GET_REVIEW, data)
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

export const getReviews = (
  queryParams: SalonReviewListQuery
): ThunkAction<void, RootState, null, Action> => {
  return async (dispatch) => {
    dispatch(reviewRequestStart())
    try {
      const res = await apiEndpoint.review.getReviews(queryParams)
      dispatch(getReviewsSuccess(res.data, queryParams?.page))
    } catch {
      history.push('/error')
    }
  }
}

export const getReview = (
  shopId: number,
  reviewId: number
): ThunkAction<void, RootState, null, Action> => {
  return async (dispatch) => {
    dispatch(reviewRequestStart())
    try {
      const res = await apiEndpoint.review.getReview(shopId, reviewId)
      dispatch(getReviewSuccess(res.data))
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
  | ReturnType<typeof getReviewsSuccess>
  | ReturnType<typeof getReviewSuccess>
  | ReturnType<typeof createReviewSuccess>
  | ReturnType<typeof patchReviewSuccess>
  | ReturnType<typeof deleteReviewSuccess>
  | ReturnType<typeof reviewRequestFailure>