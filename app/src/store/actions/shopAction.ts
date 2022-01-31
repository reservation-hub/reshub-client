//----------------------------------
// redux action お店情報管理関数
//----------------------------------
import { SHOPS_TYPE } from '@store/types/shopTypes'
import { RootState, typedAction } from '@store/store'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import apiEndpoint from '@utils/api/apiEndpoint'
import history from '@utils/routers/history'
import {
  ShopListResponse,
  ShopResponse
} from '@utils/api/request-response-types/Shop'
import { ShopForList } from '@/utils/api/request-response-types/client/models/Shop'

// リクエストを始まる
const shopRequestStart = () => {
  return typedAction(SHOPS_TYPE.REQUEST_START)
}

const fetchAllSuccess = (data: ShopListResponse) => {
  return typedAction(SHOPS_TYPE.FETCH_ALL, data)
}

const shopRequestSuccess = (
  data: ShopForList[],
  totalCount: number,
  page: number
) => {
  return typedAction(SHOPS_TYPE.REQUEST_SUCCESS, { data, totalCount, page })
}

const shopSearchSuccess = (
  data: ShopForList[],
  totalCount: number,
  page: number,
  areaId: number,
  prefectureId?: number,
  cityId?: number
) => {
  return typedAction(SHOPS_TYPE.SEARCH_SUCCESS, {
    data,
    totalCount,
    page,
    areaId,
    prefectureId,
    cityId
  })
}

const shopGetSuccess = (data: ShopResponse) => {
  return typedAction(SHOPS_TYPE.GET_SUCCESS, data)
}

// リクエストが失敗したらこっち
const shopRequestFailure = (msg: string) => {
  return typedAction(SHOPS_TYPE.REQUEST_FAILURE, msg)
}

export const fetchAllItems =
  (): ThunkAction<void, RootState, null, Action> => async (dispatch) => {
    dispatch(shopRequestStart())
    try {
      const res = await apiEndpoint.shops.fetchAll()
      dispatch(fetchAllSuccess(res.data))
    } catch {
      history.push('/error')
    }
  }

// 全てのお店データを読み込む
export const fetchShopList =
  (
    page: number,
    order: 'asc' | 'desc'
  ): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(shopRequestStart())
    try {
      const res = await apiEndpoint.shops.getShops(page, order)
      setTimeout(() => {
        dispatch(shopRequestSuccess(res.data.values, res.data.totalCount, page))
      }, 1500)
    } catch (e) {
      history.push('/error')
    }
  }

export const searchShopsToLocation =
  (
    page: number,
    areaId: number,
    prefectureId?: number,
    cityId?: number
  ): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(shopRequestStart())
    try {
      const res = await apiEndpoint.shops.shopsSearchToLocation(
        page,
        areaId,
        prefectureId,
        cityId
      )
      setTimeout(() => {
        dispatch(
          shopSearchSuccess(
            res.data.values,
            res.data.totalCount,
            page,
            areaId,
            prefectureId,
            cityId
          )
        )
      }, 1500)
    } catch (e) {
      history.push('/error')
    }
  }

// お店データを一つだけ読み込む
export const getOneShop =
  (id: number): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(shopRequestStart())
    try {
      const res = await apiEndpoint.shops.getShop(id)
      dispatch(shopGetSuccess(res.data))
    } catch (e) {
      history.push('/error')
    }
  }

export type ShopAction =
  | ReturnType<typeof shopRequestStart>
  | ReturnType<typeof fetchAllSuccess>
  | ReturnType<typeof shopRequestSuccess>
  | ReturnType<typeof shopSearchSuccess>
  | ReturnType<typeof shopGetSuccess>
  | ReturnType<typeof shopRequestFailure>
