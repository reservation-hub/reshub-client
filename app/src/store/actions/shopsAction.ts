import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState, typedAction } from '../store'
import { SHOPS_TYPE } from '../types/shopsType'

// todo Shopのtype指定

const shopRequestStart = () => {
  return typedAction(SHOPS_TYPE.SHOP_REQUEST_START)
}

const shopFetchSuccess = (data: any[]) => {
  return typedAction(SHOPS_TYPE.FETCH_ALL, data)
}

const shopGetSuccess = (data: any) => {
  return typedAction(SHOPS_TYPE.FETCH_ONE, data)
}

const shopRequestFailure = (message: string) => {
  return typedAction(SHOPS_TYPE.SHOP_REQUEST_FAILURE, message)
}

// todo Thunk処理を書く

export type ShopAction =
  | ReturnType<typeof shopRequestStart>
  | ReturnType<typeof shopFetchSuccess>
  | ReturnType<typeof shopGetSuccess>
  | ReturnType<typeof shopRequestFailure>
