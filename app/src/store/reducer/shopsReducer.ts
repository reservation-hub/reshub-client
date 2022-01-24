import { SHOPS_TYPE, TShopsState } from '@store/types/shopsType'
import { ShopAction } from '@store/actions/shopsAction'

// todo shops / shopのtype指定
const initialState: TShopsState = {
  loading: true,
  shopsErrorMessage: '',
  shops: {} as any[],
  shop: {} as any
}

export const shopReducer = (state = initialState, action: ShopAction) => {
  switch (action.type) {
    case SHOPS_TYPE.SHOP_REQUEST_START:
      return {
        ...state,
        loading: true
      }
    case SHOPS_TYPE.FETCH_ALL:
      return {
        ...state,
        loading: false,
        shops: action.payload
      }
    case SHOPS_TYPE.FETCH_ONE:
      return {
        ...state,
        loading: false,
        shop: action.payload
      }
    case SHOPS_TYPE.SHOP_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        shopsErrorMessage: action.payload
      }
    default:
      return state
  }
}

export default shopReducer
