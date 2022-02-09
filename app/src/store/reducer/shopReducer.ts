//----------------------------------
// redux お店状態管理 reducer
//----------------------------------
import { ShopState, SHOPS_TYPE } from '@store/types/shopTypes'
import { ShopAction } from '@store/actions/shopAction'
import { ShopForList } from '@utils/api/request-response-types/client/models/Shop'
import {
  SalonResponse,
  SalonScheduleResponse
} from '@utils/api/request-response-types/client/Shop'

const initialState: ShopState = {
  loading: false,
  fetchIndex: [] as ShopForList[],
  shops: [] as ShopForList[],
  searchToName: [] as ShopForList[],
  schedule: {} as SalonScheduleResponse,
  totalCount: 0,
  page: 0,
  areaId: 0,
  prefectureId: 0,
  cityId: 0,
  name: '',
  shop: {} as SalonResponse,
  msg: ''
}

const shopReducer = (state = initialState, action: ShopAction) => {
  switch (action.type) {
    case SHOPS_TYPE.REQUEST_START:
      return {
        ...state,
        loading: true
      }
    case SHOPS_TYPE.FETCH_INDEX_SUCCESS:
      return {
        ...state,
        loading: false,
        fetchIndex: state.fetchIndex.concat(action.payload.values)
      }
    case SHOPS_TYPE.GET_SCHEDULE:
      return {
        ...state,
        loading: false,
        schedule: action.payload
      }
    case SHOPS_TYPE.REQUEST_SUCCESS:
      return Object.assign({}, initialState, {
        ...state,
        loading: false,
        shops: state.shops.concat(action.payload.data),
        totalCount: action.payload.totalCount,
        page: action.payload.page
      })
    case SHOPS_TYPE.SEARCH_SUCCESS:
      return Object.assign({}, initialState, {
        ...state,
        loading: false,
        searchToName: state.searchToName.concat(action.payload.data),
        totalCount: action.payload.totalCount,
        page: action.payload.page,
        areaId: action.payload.areaId,
        prefectureId: action.payload.prefectureId,
        cityId: action.payload.cityId,
        name: action.payload.name
      })
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
