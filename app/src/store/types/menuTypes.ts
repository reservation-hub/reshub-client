import {
  MenuListResponse,
  MenuResponse
} from '@/utils/api/request-response-types/Shop'

export const MENU_TYPE = {
  REQUEST_START: 'MENU_REQUEST_START',
  REQUEST_SUCCESS: 'MENU_REQUEST_SUCCESS',
  GET_SUCCESS: 'MENU_GET_SUCCESS',
  ADD_SUCCESS: 'MENU_ADD_SUCCESS',
  EDIT_SUCCESS: 'MENU_EDIT_SUCCESS',
  DELETE_SUCCESS: 'MENU_DELETE_SUCCESS',
  REQUEST_FAILURE: 'MENU_REQUEST_FAILURE'
} as const

export type MenuState = {
  loading: boolean
  menus: MenuListResponse
  menu: MenuResponse
  err?: string
}
