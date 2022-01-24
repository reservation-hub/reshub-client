export const SHOPS_TYPE = {
  SHOP_REQUEST_START: 'SHOP_REQUEST_START',
  FETCH_ALL: 'FETCH_ALL',
  FETCH_ONE: 'FETCH_ONE',
  SHOP_REQUEST_FAILURE: 'SHOP_REQUEST_FAILURE'
} as const

// todo shopのtype指定
export type TShopsState = {
  loading: boolean
  shopsErrorMessage: string
  shops: any[]
  shop: any
}
