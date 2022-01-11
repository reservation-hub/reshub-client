import {
  StylistListResponse,
  StylistResponse
} from '@utils/api/request-response-types/Shop'
import { DefaultState } from '@store/store'

export const STYLIST_TPYE = {
  REQUEST_START: 'STYLIST_REQUEST_START',
  REQUEST_SUCCESS: 'STYLIST_REQUEST_SUCCESS',
  GET_SUCCESS: 'STYLIST_GET_SUCCESS',
  ADD_SUCCESS: 'STYLIST_ADD_SUCCESS',
  EDIT_SUCCESS: 'STYLIST_EDIT_SUCCESS',
  DELETE_SUCCESS: 'STYLIST_DELETE_SUCCESS',
  REQUEST_FAILURE: 'STYLIST_REQUEST_FAILURE'
} as const

export type StylistState = DefaultState & {
  stylists: StylistListResponse
  stylist: StylistResponse
}
