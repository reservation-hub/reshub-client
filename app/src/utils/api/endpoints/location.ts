//-----------------------------------------------
// location
//-----------------------------------------------
import instance from '@utils/api'
import { AxiosResponse } from 'axios'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import {
  AreaPrefecturesResponse,
  AreaResponse,
  PrefectureCitiesResponse
} from '@utils/api/request-response-types/Location'

export const getAreas = async (): Promise<AxiosResponse<AreaResponse>> => {
  return await instance.get(baseEndpoint.area)
}

export const getArea = async (
  id: number
): Promise<AxiosResponse<AreaPrefecturesResponse>> => {
  return await instance.get<AreaPrefecturesResponse>(
    `${baseEndpoint.area}/${id}/prefectures`
  )
}

export const getPrefecture = async (
  id: number
): Promise<AxiosResponse<PrefectureCitiesResponse>> => {
  return await instance.get<PrefectureCitiesResponse>(
    `${baseEndpoint.prefecture}/${id}/cities`
  )
}

const location = {
  getAreas,
  getArea,
  getPrefecture
}

export default location
