//-----------------------------------------------
// shops
//-----------------------------------------------
import instance from '@utils/api'
import { AxiosResponse } from 'axios'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import {
  ShopListResponse,
  ShopResponse
} from '@utils/api/request-response-types/Shop'

export const fetchAll = async () => {
  return await instance.get(`${baseEndpoint.shops}/`)
}

export const getShops = async (
  page: number,
  order: 'asc' | 'desc'
): Promise<AxiosResponse<ShopListResponse>> => {
  return await instance.get<ShopListResponse>(
    `${baseEndpoint.shops}?page=${page}&order=${order}`
  )
}

export const getShop = async (
  id: number
): Promise<AxiosResponse<ShopResponse>> => {
  return await instance.get<ShopResponse>(`${baseEndpoint.shops}/${id}`)
}

export const shopsSearchToKeyword = async (
  keyword: string,
  page?: number,
  order?: 'asc' | 'desc'
): Promise<AxiosResponse<ShopListResponse>> => {
  return await instance.get<ShopListResponse>(
    baseEndpoint.shops + page
      ? `/search/?keyword=${keyword}&page=${page}&order=${order}`
      : `/search/?keyword=${keyword}`
  )
}

export const shopsSearchToLocation = async (
  page: number,
  areaId: number,
  prefectureId?: number,
  cityId?: number
): Promise<AxiosResponse<ShopListResponse>> => {
  return await instance.get<ShopListResponse>(
    `${baseEndpoint.shops}/search/area/?page=${page}&areaId=${areaId}${
      prefectureId ? `&prefectureId=${prefectureId}` : ''
    }${cityId ? `&cityId=${cityId}` : ''}`
  )
}

export const shopsSearchToTags = async (
  tags?: string
): Promise<AxiosResponse<ShopListResponse>> => {
  return await instance.get<ShopListResponse>(
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
