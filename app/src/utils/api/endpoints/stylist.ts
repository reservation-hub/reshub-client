//-----------------------------------------------
// stylist
//-----------------------------------------------
import instance from '@utils/api'
import { AxiosResponse } from 'axios'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import { StylistResponse } from '@utils/api/request-response-types/Shop'
import {
  SalonStylistListQuery,
  SalonStylistListResponse
} from '../request-response-types/client/Shop'

export const fetchAll = async (
  queryParams: SalonStylistListQuery
): Promise<AxiosResponse<SalonStylistListResponse>> => {
  return await instance.get<SalonStylistListResponse>(
    `${baseEndpoint.shops}/${queryParams.shopId}/stylists?page=${queryParams?.page}&order=${queryParams?.order}&take=${queryParams?.take}`
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
