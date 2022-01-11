//-----------------------------------------------
// menu
//-----------------------------------------------
import instance from '@utils/api'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import { AxiosResponse } from 'axios'
import {
  InsertMenuQuery,
  MenuListResponse,
  MenuResponse,
  UpdateMenuQuery
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

export const createMenu = async (
  menuData: InsertMenuQuery
): Promise<AxiosResponse<string>> => {
  return await instance.post<string>(
    `${baseEndpoint.shops}/${menuData.shopId}/menu`,
    {
      ...menuData
    }
  )
}

export const patchMenu = async (
  menuData: UpdateMenuQuery
): Promise<AxiosResponse<string>> => {
  return await instance.patch<string>(
    `${baseEndpoint.shops}/${menuData.shopId}/menu/${menuData.menuId}`,
    { ...menuData }
  )
}

export const deleteMenu = async (
  shopId: number,
  menuId: number
): Promise<AxiosResponse<string>> => {
  return await instance.delete<string>(
    `${baseEndpoint.shops}/${shopId}/menu/${menuId}`
  )
}

const menu = {
  fetchAll,
  getMenu,
  createMenu,
  patchMenu,
  deleteMenu
}

export default menu
