//----------------------------------
// redux お店状態管理 reducer
//----------------------------------
import { ShopState, SHOPS_TYPE } from '@store/types/shopTypes'
import { ShopAction } from '@store/actions/shopAction'
import {
  ShopListResponse,
  ShopResponse
} from '@utils/api/request-response-types/Shop'
import { ShopForList } from '@/utils/api/request-response-types/client/models/Shop'

const initialState: ShopState = {
  loading: false,
  fetchAll: {} as ShopListResponse,
  shops: [] as ShopForList[],
  totalCount: 0,
  page: 0,
  areaId: 0,
  prefectureId: 0,
  cityId: 0,
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
        shops: state.shops.concat(action.payload.data),
        totalCount: action.payload.totalCount,
        page: action.payload.page
      }
    case SHOPS_TYPE.SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        shops: state.shops.concat(action.payload.data),
        totalCount: action.payload.totalCount,
        page: action.payload.page,
        areaId: action.payload.areaId,
        prefectureId: action.payload.prefectureId,
        cityId: action.payload.cityId
      }
    case SHOPS_TYPE.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        shop: action.payload
      }
    case SHOPS_TYPE.REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    default:
      return state
  }
}

export default shopReducer
