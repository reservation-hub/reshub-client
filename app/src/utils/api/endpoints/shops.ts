//-----------------------------------------------
// shops
//-----------------------------------------------
import instance from '@utils/api'
import { AxiosResponse } from 'axios'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import {
  InsertShopQuery,
  ShopListResponse,
  ShopResponse,
  UpdateShopQuery
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

export const createShop = async (
  shopData: InsertShopQuery
): Promise<AxiosResponse<string>> => {
  return await instance.post<string>(baseEndpoint.shops, { ...shopData })
}

export const patchShop = async (
  shopData: UpdateShopQuery
): Promise<AxiosResponse<string>> => {
  return await instance.patch<string>(`${baseEndpoint.shops}/${shopData.id}`, {
    ...shopData.params
  })
}

export const deleteShop = async (
  id: number
): Promise<AxiosResponse<string>> => {
  return await instance.delete<string>(`${baseEndpoint.shops}/${id}`)
}

const shops = {
  fetchAll,
  getShops,
  getShop,
  createShop,
  patchShop,
  deleteShop
}

export default shops
