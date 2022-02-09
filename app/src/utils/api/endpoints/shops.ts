//-----------------------------------------------
// shops
//-----------------------------------------------
import instance from '@utils/api'
import { AxiosResponse } from 'axios'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import {
  SalonListByAreaQuery,
  SalonListByNameQuery,
  SalonListQuery,
  SalonListResponse,
  SalonResponse,
  SalonScheduleQuery,
  SalonScheduleResponse
} from '@request-response-types/client/Shop'

export const fetchAll = async () => {
  return await instance.get(`${baseEndpoint.shops}/`)
}

export const getShops = async (
  queryParams?: SalonListQuery
): Promise<AxiosResponse<SalonListResponse>> => {
  return await instance.get<SalonListResponse>(
    `${baseEndpoint.shops}?page=${queryParams?.page}&order=${queryParams?.order}&take=${queryParams?.take}`
  )
}

export const getShopSchedule = async (
  queryParams: SalonScheduleQuery
): Promise<AxiosResponse<SalonScheduleResponse>> => {
  return await instance.get<SalonScheduleResponse>(
    `${baseEndpoint.shops}/${queryParams.shopId}/schedule`
  )
}

export const getShop = async (
  id: number
): Promise<AxiosResponse<SalonResponse>> => {
  return await instance.get<SalonResponse>(`${baseEndpoint.shops}/${id}`)
}

export const searchToShopsName = async (
  queryParams: SalonListByNameQuery
): Promise<AxiosResponse<SalonListResponse>> => {
  return await instance.get<SalonListResponse>(
    baseEndpoint.shops + queryParams.page
      ? `${baseEndpoint.shops}/search/name?name=${queryParams.name}&page=${queryParams.page}&order=${queryParams.order}`
      : `${baseEndpoint.shops}/search/name?name=${queryParams.name}`
  )
}

export const searchToShopsLocation = async (
  queryParams: SalonListByAreaQuery
): Promise<AxiosResponse<SalonListResponse>> => {
  return await instance.get<SalonListResponse>(
    `${baseEndpoint.shops}/search/area/?page=${queryParams?.page}&order=${
      queryParams?.order
    }&areaId=${queryParams.areaId}${
      queryParams.prefectureId
        ? `&prefectureId=${queryParams?.prefectureId}`
        : ''
    }${queryParams.cityId ? `&cityId=${queryParams?.cityId}` : ''}`
  )
}

export const shopsSearchToTags = async (
  tags?: string
): Promise<AxiosResponse<SalonListResponse>> => {
  return await instance.get<SalonListResponse>(
    `${baseEndpoint.shops}/search/tag/?tags[]=${tags}`
  )
}

const shops = {
  fetchAll,
  getShops,
  getShop,
  getShopSchedule,
  searchToShopsLocation,
  searchToShopsName
}

export default shops
