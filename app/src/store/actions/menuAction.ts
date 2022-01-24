import { RootState, typedAction } from '@store/store'
import { MENU_TYPE } from '@store/types/menuTypes'
import {
  InsertMenuQuery,
  MenuListResponse,
  MenuResponse,
  UpdateMenuQuery
} from '@/utils/api/request-response-types/Shop'
import { ThunkAction } from 'redux-thunk'
import apiEndpoint from '@/utils/api/apiEndpoint'
import { Action } from 'redux'
import history from '@/utils/routers/history'

const menuRequsetStart = () => {
  return typedAction(MENU_TYPE.REQUEST_START)
}

const fetchAllSuccess = (data: MenuListResponse) => {
  return typedAction(MENU_TYPE.REQUEST_SUCCESS, data)
}

const getSuccess = (data: MenuResponse) => {
  return typedAction(MENU_TYPE.GET_SUCCESS, data)
}

const addSuccess = (data: string) => {
  return typedAction(MENU_TYPE.ADD_SUCCESS, data)
}

const editSuccess = (data: string) => {
  return typedAction(MENU_TYPE.EDIT_SUCCESS, data)
}

const deleteSuccess = (data: string) => {
  return typedAction(MENU_TYPE.DELETE_SUCCESS, data)
}

const requestFailure = (data: string) => {
  return typedAction(MENU_TYPE.REQUEST_FAILURE, data)
}

export const fetchAllMenu =
  (
    shopId: number,
    page: number,
    order?: string
  ): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(menuRequsetStart())
    try {
      const res = await apiEndpoint.menu.fetchAll(shopId, page, order)
      dispatch(fetchAllSuccess(res.data))
    } catch {
      history.push('/error')
    }
  }

export const getMenu =
  (
    shopId: number,
    menuId: number
  ): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(menuRequsetStart())
    try {
      const res = await apiEndpoint.menu.getMenu(shopId, menuId)
      dispatch(getSuccess(res.data))
    } catch {
      history.push('/error')
    }
  }

export const createMenu =
  (menuData: InsertMenuQuery): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(menuRequsetStart())
    try {
      const res = await apiEndpoint.menu.createMenu(menuData)
      dispatch(addSuccess(res.data))
    } catch (e: any) {
      dispatch(requestFailure(e))
    }
  }

export const editMenu =
  (menuData: UpdateMenuQuery): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(menuRequsetStart())
    try {
      const res = await apiEndpoint.menu.patchMenu(menuData)
      dispatch(editSuccess(res.data))
    } catch (e: any) {
      dispatch(requestFailure(e))
    }
  }

export const deleteMenu =
  (
    shopId: number,
    menuId: number
  ): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(menuRequsetStart())
    try {
      const res = await apiEndpoint.menu.deleteMenu(shopId, menuId)
      dispatch(deleteSuccess(res.data))
    } catch (e: any) {
      dispatch(requestFailure(e))
    }
  }

export type MenuAction =
  | ReturnType<typeof menuRequsetStart>
  | ReturnType<typeof fetchAllSuccess>
  | ReturnType<typeof getSuccess>
  | ReturnType<typeof addSuccess>
  | ReturnType<typeof editSuccess>
  | ReturnType<typeof deleteSuccess>
  | ReturnType<typeof requestFailure>
