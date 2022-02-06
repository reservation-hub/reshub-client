import { PopularMenusResponse } from '@/utils/api/request-response-types/client/Menu'
import { Menu } from '@utils/api/request-response-types/client/models/Menu'
import { DefaultState } from '../store'

export const MENU_TYPE = {
  REQUEST_START: 'MENU_REQUEST_START',
  GET_MENUS: 'MENUS_REQUEST_SUCCESS',
  GET_POPULAR_MENU: 'POPULAR_MENU_REQUEST_SUCCESS',
  REQUEST_FAILURE: 'MENU_REQUEST_FAILURE'
} as const

export type MenuState = Readonly<
  DefaultState & {
    menus: Menu[]
    popularMenu: PopularMenusResponse
    totalCount: number
    page?: number
    shopId: number
  }
>
