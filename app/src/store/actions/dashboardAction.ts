import { DASHBOARD_TYPE } from '@store/types/dashboardTypes'
import { RootState, typedAction } from '@store/store'
import { ThunkAction } from 'redux-thunk'
import apiEndpoint from '@utils/api/apiEndpoint'
import history from '@/utils/routers/history'
import {
  salonIndexAdminResponse,
  salonIndexShopStaffResponse
} from '@utils/api/request-response-types/Dashboard'

const dashboardRequestStart = () => {
  return typedAction(DASHBOARD_TYPE.REQUEST_START)
}

const dashboardRequestSuccess = (
  data: salonIndexShopStaffResponse & salonIndexAdminResponse
) => {
  return typedAction(DASHBOARD_TYPE.REQUEST_SUCCESS, data)
}

export const fetchDashboard =
  (): ThunkAction<void, RootState, null, DashboardAction> =>
  async (dispatch) => {
    dispatch(dashboardRequestStart())
    try {
      const res = await apiEndpoint.dashboard.fetchDashboard()
      dispatch(dashboardRequestSuccess(res.data))
    } catch (e) {
      history.push('/error')
    }
  }

export type DashboardAction =
  | ReturnType<typeof dashboardRequestStart>
  | ReturnType<typeof dashboardRequestSuccess>
