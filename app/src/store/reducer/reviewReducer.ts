import review from '@/utils/api/endpoints/review'
import { Review } from '@/utils/api/request-response-types/client/models/Review'
import { ReviewAction } from '../actions/reviewAction'
import { ReviewState, REVIEW_TYPE } from '../types/reviewTypes'

const initialState: ReviewState = {
  loading: false,
  msg: '',
  reviews: [] as Review[],
  review: {} as Review,
  totalCount: 0,
  page: 0
}

const reviewReducer = (state = initialState, action: ReviewAction) => {
  switch (action.type) {
    case REVIEW_TYPE.REQUEST_START:
      return {
        ...state,
        loading: false
      }
    case REVIEW_TYPE.GET_REVIEWS:
      return {
        ...state,
        loading: false,
        reviews:
          action.payload.totalCount > 10
            ? state.reviews.concat(action.payload.data)
            : action.payload.data,
        totalCount: action.payload.totalCount,
        page: action.payload.page
      }
    case REVIEW_TYPE.GET_REVIEW:
      return {
        ...state,
        loading: false,
        review: action.payload
      }
    case REVIEW_TYPE.CREATE_REVIEW:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    case REVIEW_TYPE.PATCH_REVIEW:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    case REVIEW_TYPE.DELETE_REVIEW:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    case REVIEW_TYPE.REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    default:
      return state
  }
}

export default reviewReducer
