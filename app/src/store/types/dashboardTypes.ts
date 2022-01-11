import {
  salonIndexAdminResponse,
  salonIndexShopStaffResponse
} from '@utils/api/request-response-types/Dashboard'

export const DASHBOARD_TYPE = {
  REQUEST_START: 'DASHBOARD_REQUEST_START',
  REQUEST_SUCCESS: 'DASHBOARD_REQUEST_SUCCESS',
  REQUSET_FAILURE: 'DASHBOARD_REQUSET_FAILURE'
} as const

export type DashBoardState = {
  loading: boolean
  data: salonIndexShopStaffResponse & salonIndexAdminResponse
}
