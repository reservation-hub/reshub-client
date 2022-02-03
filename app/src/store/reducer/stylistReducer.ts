import { StylistForList } from '@utils/api/request-response-types/client/models/Stylist'
import { StylistAction } from '../actions/stylistAction'
import { StylistState, STYLIST_TYPE } from '../types/stylistTypes'

const initialState: StylistState = {
  loading: false,
  stylists: [] as StylistForList[],
  totalCount: 0,
  page: 0,
  shopId: 0,
  msg: ''
}

const stylistReducer = (state = initialState, action: StylistAction) => {
  switch (action.type) {
    case STYLIST_TYPE.REQUEST_START:
      return {
        ...state,
        loading: true
      }
    case STYLIST_TYPE.REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        stylists: state.stylists.filter((value) => value.shopId === action.payload.shopId).concat(action.payload.data),
        totalCount: action.payload.totalCount,
        page: action.payload.page,
        shopId: action.payload.shopId
      }
    case STYLIST_TYPE.REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    default:
      return state
  }
}

export default stylistReducer
