//----------------------------------
// redux action types お店管理
//----------------------------------
import { ShopForList } from '@utils/api/request-response-types/client/models/Shop'
import { SalonResponse } from '@utils/api/request-response-types/client/Shop'
import { DefaultState } from '../store'

export const SHOPS_TYPE = {
  REQUEST_START: 'SHOP_REQUEST_START',
  FETCH_INDEX_SUCCESS: 'SHOP_FETCH_INDEX_SUCCESS',
  REQUEST_SUCCESS: 'SHOP_REQUEST_SUCCESS',
  SEARCH_SUCCESS: 'SHOP_SEARCH_SUCCESS',
  GET_SUCCESS: 'SHOP_GET_SUCCESS',
  REQUEST_FAILURE: 'SHOP_REQUEST_FAILURE'
} as const

export type ShopState = Readonly<
  DefaultState & {
    fetchIndex: ShopForList[]
    shops: ShopForList[]
    searchToName: ShopForList[]
    totalCount: number
    page: number
    areaId?: number
    prefectureId?: number
    cityId?: number
    name?: string
    shop: SalonResponse
  }
>
