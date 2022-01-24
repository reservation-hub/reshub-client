import {
  StylistListResponse,
  StylistResponse
} from '@utils/api/request-response-types/Shop'
import { STYLIST_TPYE } from '@store/types/stylistTypes'
import { RootState, typedAction } from '@store/store'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import apiEndpoint from '@utils/api/apiEndpoint'
import history from '@utils/routers/history'

const stylistRequsetStart = () => {
  return typedAction(STYLIST_TPYE.REQUEST_START)
}

const fetchAllSuccess = (data: StylistListResponse) => {
  return typedAction(STYLIST_TPYE.REQUEST_SUCCESS, data)
}

const getSuccess = (data: StylistResponse) => {
  return typedAction(STYLIST_TPYE.GET_SUCCESS, data)
}

const requestFailure = (data: string) => {
  return typedAction(STYLIST_TPYE.REQUEST_FAILURE, data)
}

export const fetchAllStylist =
  (
    shopId: number,
    page: number,
    order: 'asc' | 'desc'
  ): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(stylistRequsetStart())
    try {
      const res = await apiEndpoint.stylist.fetchAll(shopId, page, order)
      dispatch(fetchAllSuccess(res.data))
    } catch {
      history.push('/error')
    }
  }

export const getStylist =
  (
    shopId: number,
    stylistId: number
  ): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(stylistRequsetStart())
    try {
      const res = await apiEndpoint.stylist.getStylist(shopId, stylistId)
      dispatch(getSuccess(res.data))
    } catch {
      history.push('/error')
    }
  }

export type StylistAction =
  | ReturnType<typeof stylistRequsetStart>
  | ReturnType<typeof fetchAllSuccess>
  | ReturnType<typeof getSuccess>
  | ReturnType<typeof requestFailure>
