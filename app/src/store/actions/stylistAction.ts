import { STYLIST_TYPE } from '@store/types/stylistTypes'
import { RootState, typedAction } from '@store/store'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import apiEndpoint from '@utils/api/apiEndpoint'
import history from '@utils/routers/history'
import { StylistForList } from '@utils/api/request-response-types/client/models/Stylist'
import { SalonStylistListQuery } from '@utils/api/request-response-types/client/Shop'

const stylistRequestStart = () => {
  return typedAction(STYLIST_TYPE.REQUEST_START)
}

const stylistRequestSuccess = (
  data: StylistForList[],
  totalCount: number,
  shopId: number,
  page?: number
) => {
  return typedAction(STYLIST_TYPE.REQUEST_SUCCESS, {
    data,
    totalCount,
    shopId,
    page
  })
}

// const getSuccess = (data: StylistResponse) => {
//   return typedAction(STYLIST_TYPE.GET_SUCCESS, data)
// }

const stylistRequestFailure = (data: string) => {
  return typedAction(STYLIST_TYPE.REQUEST_FAILURE, data)
}

export const fetchAllStylist =
  (
    queryParams: SalonStylistListQuery
  ): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(stylistRequestStart())
    try {
      const res = await apiEndpoint.stylist.fetchAll(queryParams)
      dispatch(
        stylistRequestSuccess(
          res.data.values,
          res.data.totalCount,
          queryParams.shopId,
          queryParams?.page
        )
      )
    } catch {
      history.push('/error')
    }
  }

// export const getStylist =
//   (
//     shopId: number,
//     stylistId: number
//   ): ThunkAction<void, RootState, null, Action> =>
//   async (dispatch) => {
//     dispatch(stylistRequestStart())
//     try {
//       const res = await apiEndpoint.stylist.getStylist(shopId, stylistId)
//       dispatch(getSuccess(res.data))
//     } catch {
//       history.push('/error')
//     }
//   }

export type StylistAction =
  | ReturnType<typeof stylistRequestStart>
  | ReturnType<typeof stylistRequestSuccess>
  // | ReturnType<typeof getSuccess>
  | ReturnType<typeof stylistRequestFailure>
