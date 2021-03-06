import { Menu } from '@utils/api/request-response-types/client/models/Menu'
import { MenuAction } from '@store/actions/menuAction'
import { MenuState, MENU_TYPE } from '@store/types/menuTypes'
import { PopularMenusResponse } from '@utils/api/request-response-types/client/Menu'

const initialState: MenuState = {
  loading: false,
  menus: [] as Menu[],
  popularMenu: [] as PopularMenusResponse,
  totalCount: 0,
  shopId: 0,
  page: 0,
  msg: ''
}

const menuReducer = (state = initialState, action: MenuAction) => {
  switch (action.type) {
    case MENU_TYPE.REQUEST_START:
      return {
        ...state,
        loading: true
      }
    case MENU_TYPE.GET_MENUS:
      return {
        ...state,
        loading: false,
        menus:
          action.payload.totalCount > 10
            ? state.menus
                .filter((menu) => menu.id === action.payload.shopId)
                .concat(action.payload.data)
            : action.payload.data,
        totalCount: action.payload.totalCount,
        shopId: action.payload.shopId,
        page: action.payload.page
      }
    case MENU_TYPE.GET_POPULAR_MENU:
      return {
        ...state,
        loading: false,
        popularMenu: action.payload
      }
    case MENU_TYPE.REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    default:
      return state
  }
}

export default menuReducer
