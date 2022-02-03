import { DefaultState } from '@store/store'
import { StylistForList } from '@utils/api/request-response-types/client/models/Stylist'

export const STYLIST_TYPE = {
  REQUEST_START: 'STYLIST_REQUEST_START',
  REQUEST_SUCCESS: 'STYLIST_REQUEST_SUCCESS',
  // GET_SUCCESS: 'STYLIST_GET_SUCCESS',
  REQUEST_FAILURE: 'STYLIST_REQUEST_FAILURE'
} as const

export type StylistState = DefaultState & {
  stylists: StylistForList[]
  totalCount: number
  page?: number
  shopId: number
}
