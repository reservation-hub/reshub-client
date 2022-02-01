//-----------------------------------------------
// shops
//-----------------------------------------------
import instance from '@utils/api'
import { AxiosResponse } from 'axios'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import {
  SalonListByAreaQuery,
  SalonListQuery,
  SalonListResponse,
  SalonResponse
} from '../request-response-types/client/Shop'

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

export const getShop = async (
  id: number
): Promise<AxiosResponse<SalonResponse>> => {
  return await instance.get<SalonResponse>(`${baseEndpoint.shops}/${id}`)
}

export const shopsSearchToKeyword = async (
  keyword: string,
  page?: number,
  order?: 'asc' | 'desc'
): Promise<AxiosResponse<SalonListResponse>> => {
  return await instance.get<SalonListResponse>(
    baseEndpoint.shops + page
      ? `/search/?keyword=${keyword}&page=${page}&order=${order}`
      : `/search/?keyword=${keyword}`
  )
}

export const shopsSearchToLocation = async (
  queryParams: SalonListByAreaQuery
): Promise<AxiosResponse<SalonListResponse>> => {
  return await instance.get<SalonListResponse>(
    `${baseEndpoint.shops}/search/area/?page=${queryParams?.page}&areaId=${
      queryParams?.areaId
    }${
      queryParams?.prefectureId
        ? `&prefectureId=${queryParams?.prefectureId}`
        : ''
    }${queryParams?.cityId ? `&cityId=${queryParams?.cityId}` : ''}`
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
  shopsSearchToLocation
}

export default shops
