//-----------------------------------------------
// stylist
//-----------------------------------------------
import instance from '@utils/api'
import { AxiosResponse } from 'axios'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import {
  StylistListResponse,
  StylistResponse
} from '@utils/api/request-response-types/Shop'

export const fetchAll = async (
  shopId: number,
  page: number,
  order: 'asc' | 'desc'
): Promise<AxiosResponse<StylistListResponse>> => {
  return await instance.get<StylistListResponse>(
    `${baseEndpoint.shops}/${shopId}/stylists?page=${page}&order=${order}`
  )
}

export const getStylist = async (
  shopId: number,
  stylistId: number
): Promise<AxiosResponse<StylistResponse>> => {
  return await instance.get<StylistResponse>(
    `${baseEndpoint.shops}/${shopId}/stylists/${stylistId}`
  )
}

const stylist = {
  fetchAll,
  getStylist
}

export default stylist
