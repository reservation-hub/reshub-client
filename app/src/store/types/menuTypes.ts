import { Menu } from '@utils/api/request-response-types/client/models/Menu'
import { DefaultState } from '../store'

export const MENU_TYPE = {
  REQUEST_START: 'MENU_REQUEST_START',
  REQUEST_SUCCESS: 'MENU_REQUEST_SUCCESS',
  GET_SUCCESS: 'MENU_GET_SUCCESS',
  REQUEST_FAILURE: 'MENU_REQUEST_FAILURE'
} as const

export type MenuState = Readonly<
  DefaultState & {
    menus: Menu[]
    totalCount: number
    page?: number
    shopId: number
    // menu: MenuResponse
  }
>
