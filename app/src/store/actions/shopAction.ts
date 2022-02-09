//----------------------------------
// redux action お店情報管理関数
//----------------------------------
import { SHOPS_TYPE } from '@store/types/shopTypes'
import { RootState, typedAction } from '@store/store'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import apiEndpoint from '@utils/api/apiEndpoint'
import history from '@utils/routers/history'
import { ShopForList } from '@utils/api/request-response-types/client/models/Shop'
import {
  SalonListByAreaQuery,
  SalonListByNameQuery,
  SalonListQuery,
  SalonListResponse,
  SalonResponse,
  SalonScheduleQuery,
  SalonScheduleResponse
} from '@utils/api/request-response-types/client/Shop'

// リクエストを始まる
const shopRequestStart = () => {
  return typedAction(SHOPS_TYPE.REQUEST_START)
}

const fetchIndexSuccess = (data: SalonListResponse) => {
  return typedAction(SHOPS_TYPE.FETCH_INDEX_SUCCESS, data)
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
  areaId?: number,
  prefectureId?: number,
  cityId?: number,
  name?: string
) => {
  return typedAction(SHOPS_TYPE.SEARCH_SUCCESS, {
    data,
    totalCount,
    page,
    areaId,
    prefectureId,
    cityId,
    name
  })
}

const getScheduleSuccess = (data: SalonScheduleResponse) => {
  return typedAction(SHOPS_TYPE.GET_SCHEDULE, data)
}

const shopGetSuccess = (data: SalonResponse) => {
  return typedAction(SHOPS_TYPE.GET_SUCCESS, data)
}

// リクエストが失敗したらこっち
const shopRequestFailure = (msg: string) => {
  return typedAction(SHOPS_TYPE.REQUEST_FAILURE, msg)
}

export const getShopsForIndex =
  (queryParams: SalonListQuery): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(shopRequestStart())
    try {
      const res = await apiEndpoint.shops.getShops(queryParams)
      setTimeout(() => {
        dispatch(fetchIndexSuccess(res.data))
      }, 1500)
    } catch {
      history.push('/error')
    }
  }

// 全てのお店データを読み込む
export const getShops =
  (queryParams: SalonListQuery): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(shopRequestStart())
    try {
      const res = await apiEndpoint.shops.getShops(queryParams)
      setTimeout(() => {
        dispatch(
          shopRequestSuccess(
            res.data.values,
            res.data.totalCount,
            Number(queryParams?.page)
          )
        )
      }, 1500)
    } catch (e) {
      history.push('/error')
    }
  }

export const searchToShopsName = (
  queryParams: SalonListByNameQuery
): ThunkAction<void, RootState, null, Action> => {
  return async (dispatch) => {
    dispatch(shopRequestStart())
    try {
      const res = await apiEndpoint.shops.searchToShopsName(queryParams)
      setTimeout(() => {
        dispatch(
          shopSearchSuccess(
            res.data.values,
            res.data.totalCount,
            Number(queryParams.page),
            undefined,
            undefined,
            undefined,
            queryParams.name
          )
        )
      }, 1500)
    } catch {
      history.push('/error')
    }
  }
}

export const searchShopsToLocation =
  (
    queryParams: SalonListByAreaQuery
  ): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(shopRequestStart())
    try {
      const res = await apiEndpoint.shops.searchToShopsLocation(queryParams)
      setTimeout(() => {
        dispatch(
          shopSearchSuccess(
            res.data.values,
            res.data.totalCount,
            Number(queryParams.page),
            queryParams.areaId,
            Number(queryParams.prefectureId),
            Number(queryParams.cityId)
          )
        )
      }, 1500)
    } catch (e) {
      history.push('/error')
    }
  }

// お店データを一つだけ読み込む
export const getOneShop = (
  id: number
): ThunkAction<void, RootState, null, Action> => {
  return async (dispatch) => {
    dispatch(shopRequestStart())
    try {
      const res = await apiEndpoint.shops.getShop(id)
      setTimeout(() => {
        dispatch(shopGetSuccess(res.data))
      }, 1500)
    } catch (e) {
      history.push('/error')
    }
  }
}

export const getSalonSchedule = (
  query: SalonScheduleQuery
): ThunkAction<void, RootState, null, Action> => {
  return async (dispatch) => {
    dispatch(shopRequestStart())

    try {
      const res = await apiEndpoint.shops.getShopSchedule(query)
      dispatch(getScheduleSuccess(res.data))
    } catch {
      history.push('/error')
    }
  }
}

export type ShopAction =
  | ReturnType<typeof shopRequestStart>
  | ReturnType<typeof fetchIndexSuccess>
  | ReturnType<typeof shopRequestSuccess>
  | ReturnType<typeof shopSearchSuccess>
  | ReturnType<typeof getScheduleSuccess>
  | ReturnType<typeof shopGetSuccess>
  | ReturnType<typeof shopRequestFailure>
