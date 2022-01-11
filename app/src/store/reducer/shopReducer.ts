//----------------------------------
// redux お店状態管理 reducer
//----------------------------------
import { ShopState, SHOPS_TYPE } from '@store/types/shopTypes'
import { ShopAction } from '@store/actions/shopAction'
import {
  ShopListResponse,
  ShopResponse
} from '@utils/api/request-response-types/Shop'

const initialState: ShopState = {
  loading: false,
  fetchAll: {} as ShopListResponse,
  shops: {} as ShopListResponse,
  shop: {} as ShopResponse,
  msg: ''
}

const shopReducer = (state = initialState, action: ShopAction) => {
  switch (action.type) {
    case SHOPS_TYPE.REQUEST_START:
      return {
        ...state,
        loading: true
      }
    case SHOPS_TYPE.FETCH_ALL:
      return {
        ...state,
        loading: false,
        fetchAll: action.payload
      }
    case SHOPS_TYPE.REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        shops: action.payload
      }
    case SHOPS_TYPE.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        shop: action.payload
      }
    case SHOPS_TYPE.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    case SHOPS_TYPE.EDIT_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    case SHOPS_TYPE.DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    case SHOPS_TYPE.REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        err: action.payload || state
      }
    default:
      return state
  }
}

export default shopReducer
