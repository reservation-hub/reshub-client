//-----------------------------------------------
// menu
//-----------------------------------------------
import instance from '@utils/api'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import { AxiosResponse } from 'axios'
import {
  MenuListResponse,
  MenuResponse
} from '@utils/api/request-response-types/Shop'

export const fetchAll = async (
  shopId: number,
  page: number,
  order?: string
): Promise<AxiosResponse<MenuListResponse>> => {
  return await instance.get<MenuListResponse>(
    `${baseEndpoint.shops}/${shopId}/menu?page=${page}&order=${order}`
  )
}

export const getMenu = async (
  shopId: number,
  menuId: number
): Promise<AxiosResponse<MenuResponse>> => {
  return await instance.get<MenuResponse>(
    `${baseEndpoint.shops}/${shopId}/menu/${menuId}`
  )
}

const menu = {
  fetchAll,
  getMenu
}

export default menu
