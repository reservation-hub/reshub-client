import { Review } from '@utils/api/request-response-types/client/models/Review'
import { ReviewAction } from '@store/actions/reviewAction'
import { ReviewState, REVIEW_TYPE } from '@store/types/reviewTypes'

const initialState: ReviewState = {
  loading: false,
  msg: '',
  shopReviews: [] as Review[],
  shopReview: {} as Review,
  shopReviewsTotalCount: 0,
  userReviews: [] as Review[],
  userReview: {} as Review,
  userReviewsTotalCount: 0,
  page: 0
}

const reviewReducer = (state = initialState, action: ReviewAction) => {
  switch (action.type) {
    case REVIEW_TYPE.REQUEST_START:
      return {
        ...state,
        loading: false
      }
    case REVIEW_TYPE.SHOP_REVIEWS:
      return {
        ...state,
        loading: false,
        shopReviews:
          action.payload.totalCount > 10
            ? state.shopReviews.concat(action.payload.data)
            : action.payload.data,
        shopReviewsTotalCount: action.payload.totalCount,
        page: action.payload.page
      }
    case REVIEW_TYPE.SHOP_REVIEW:
      return {
        ...state,
        shopReview: action.payload,
        loading: false,
        review: action.payload
      }
    case REVIEW_TYPE.USER_REVIEWS:
      return {
        ...state,
        loading: false,
        userReviews:
          action.payload.totalCount > 10
            ? state.userReviews.concat(action.payload.data)
            : action.payload.data,
        userReviewsTotalCount: action.payload.totalCount,
        page: action.payload.page
      }
    case REVIEW_TYPE.USER_REVIEW:
      return {
        ...state,
        userReview: action.payload,
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
