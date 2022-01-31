import { RootState, typedAction } from '@store/store'
import { LOCATION_TYPE } from '@store/types/locationTypes'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import apiEndpoint from '@utils/api/apiEndpoint'
import history from '@utils/routers/history'
import {
  AreaPrefecturesResponse,
  PrefectureCitiesResponse
} from '@utils/api/request-response-types/Location'
import { Area } from '@utils/api/request-response-types/models/Location'

const locationRequestStart = () => {
  return typedAction(LOCATION_TYPE.REQUEST_START)
}

const areaReqSuccess = (data: Area[]) => {
  return typedAction(LOCATION_TYPE.GET_AREA_SUCCESS, data)
}

const getOneAreaSuccess = (data: AreaPrefecturesResponse) => {
  return typedAction(LOCATION_TYPE.GET_PREF_SUCCESS, data)
}

const getOnePrefSuccess = (data: PrefectureCitiesResponse) => {
  return typedAction(LOCATION_TYPE.GET_CITY_SUCCESS, data)
}

export const getArea =
  (): ThunkAction<void, RootState, null, Action> => async (dispatch) => {
    dispatch(locationRequestStart())
    try {
      const res = await apiEndpoint.location.getAreas()
      dispatch(areaReqSuccess(res.data))
    } catch (e) {
      history.push('/error')
    }
  }

export const getOnePref =
  (id: number): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    try {
      const res = await apiEndpoint.location.getArea(id)
      dispatch(getOneAreaSuccess(res.data))
    } catch (e) {
      history.push('/error')
    }
  }

export const getOneCity =
  (id: number): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    try {
      const res = await apiEndpoint.location.getPrefecture(id)
      dispatch(getOnePrefSuccess(res.data))
    } catch (e) {
      history.push('/error')
    }
  }

export type locationAction =
  | ReturnType<typeof locationRequestStart>
  | ReturnType<typeof areaReqSuccess>
  | ReturnType<typeof getOneAreaSuccess>
  | ReturnType<typeof getOnePrefSuccess>
