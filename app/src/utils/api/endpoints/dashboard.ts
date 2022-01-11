import { AxiosResponse } from 'axios'
import instance from '@utils/api'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import {
  salonIndexAdminResponse,
  salonIndexShopStaffResponse
} from '@utils/api/request-response-types/Dashboard'

export const fetchDashboard = async (): Promise<
  AxiosResponse<salonIndexShopStaffResponse & salonIndexAdminResponse>
> => {
  return await instance.get<
    salonIndexShopStaffResponse & salonIndexAdminResponse
  >(`${baseEndpoint.dashboard}/salon`)
}

const dashboard = {
  fetchDashboard
}

export default dashboard
