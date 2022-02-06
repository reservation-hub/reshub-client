import { RootState, typedAction } from '@store/store'
import { MENU_TYPE } from '@store/types/menuTypes'
import { ThunkAction } from 'redux-thunk'
import apiEndpoint from '@utils/api/apiEndpoint'
import { Action } from 'redux'
import history from '@utils/routers/history'
import { Menu } from '@utils/api/request-response-types/client/models/Menu'
import { SalonMenuListQuery } from '@utils/api/request-response-types/client/Shop'
import { PopularMenusResponse } from '@/utils/api/request-response-types/client/Menu'

const menuRequsetStart = () => {
  return typedAction(MENU_TYPE.REQUEST_START)
}

const fetchAllSuccess = (
  data: Menu[],
  totalCount: number,
  shopId: number,
  page?: number
) => {
  return typedAction(MENU_TYPE.GET_MENUS, {
    data,
    totalCount,
    shopId,
    page
  })
}

const getPopularMenuSuccess = (data: PopularMenusResponse) => {
  return typedAction(MENU_TYPE.GET_POPULAR_MENU, data)
}

const requestFailure = (data: string) => {
  return typedAction(MENU_TYPE.REQUEST_FAILURE, data)
}

export const fetchAllMenu = (
  queryParams: SalonMenuListQuery
): ThunkAction<void, RootState, null, Action> => {
  return async (dispatch) => {
    dispatch(menuRequsetStart())
    try {
      const res = await apiEndpoint.menu.fetchAll(queryParams)
      dispatch(
        fetchAllSuccess(
          res.data.values,
          res.data.totalCount,
          queryParams.shopId,
          queryParams.page
        )
      )
    } catch {
      history.push('/error')
    }
  }
}

export const getPopularMenu = (): ThunkAction<
  void,
  RootState,
  null,
  Action
> => {
  return async (dispatch) => {
    dispatch(menuRequsetStart())
    try {
      const res = await apiEndpoint.menu.getPopularMenu()
      dispatch(getPopularMenuSuccess(res.data))
    } catch (e: any) {
      console.log(e.response)
    }
  }
}

export type MenuAction =
  | ReturnType<typeof menuRequsetStart>
  | ReturnType<typeof fetchAllSuccess>
  | ReturnType<typeof getPopularMenuSuccess>
  | ReturnType<typeof requestFailure>
