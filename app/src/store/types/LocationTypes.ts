import {
  AreaPrefecturesResponse,
  PrefectureCitiesResponse
} from '@utils/api/request-response-types/Location'
import { Area } from '@utils/api/request-response-types/models/Location'
import { DefaultState } from '../store'

export const LOCATION_TYPE = {
  REQUEST_START: 'LOCATION_REQUEST_START',
  GET_AREA_SUCCESS: 'GET_AREA_SUCCESS',
  GET_PREF_SUCCESS: 'GET_PREF_SUCCESS',
  GET_CITY_SUCCESS: 'GET_CITY_SUCCESS'
} as const

export type LocationState = DefaultState & {
  area: Area[]
  prefecture: AreaPrefecturesResponse
  city: PrefectureCitiesResponse
}
