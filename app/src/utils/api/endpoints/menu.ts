//-----------------------------------------------
// menu
//-----------------------------------------------
import instance from '@utils/api'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import { AxiosResponse } from 'axios'
import { MenuResponse } from '@request-response-types/Shop'
import {
  SalonMenuListQuery,
  SalonMenuListResponse
} from '@request-response-types/client/Shop'

export const fetchAll = async (
  queryParams: SalonMenuListQuery
): Promise<AxiosResponse<SalonMenuListResponse>> => {
  return await instance.get<SalonMenuListResponse>(
    `${baseEndpoint.shops}/${queryParams.shopId}/menus?page=${queryParams.page}&order=${queryParams.order}&take=${queryParams.take}`
  )
}

export const getMenu = async (
  shopId: number,
  menuId: number
): Promise<AxiosResponse<MenuResponse>> => {
  return await instance.get<MenuResponse>(
    `${baseEndpoint.shops}/${shopId}/menus/${menuId}`
  )
}

const menu = {
  fetchAll,
  getMenu
}

export default menu
