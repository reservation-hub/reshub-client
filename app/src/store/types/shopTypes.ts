//----------------------------------
// redux action types お店管理
//----------------------------------
import { ShopForList } from '@/utils/api/request-response-types/client/models/Shop'
import {
  ShopListResponse,
  ShopResponse
} from '@utils/api/request-response-types/Shop'
import { DefaultState } from '../store'

export const SHOPS_TYPE = {
  REQUEST_START: 'SHOP_REQUEST_START',
  FETCH_ALL: 'SHOP_FETCH_ALL',
  REQUEST_SUCCESS: 'SHOP_REQUEST_SUCCESS',
  SEARCH_SUCCESS: 'SHOP_SEARCH_SUCCESS',
  GET_SUCCESS: 'SHOP_GET_SUCCESS',
  REQUEST_FAILURE: 'SHOP_REQUEST_FAILURE'
} as const

export type ShopState = DefaultState & {
  fetchAll: ShopListResponse
  shops: ShopForList[]
  totalCount: number
  page: number
  areaId: number
  prefectureId: number | undefined
  cityId: number | undefined
  shop: ShopResponse
}
