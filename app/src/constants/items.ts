import { MenuForList } from '@utils/api/request-response-types/models/Menu'
import { ReservationForList } from '@utils/api/request-response-types/models/Reservation'
import { ShopForList } from '@utils/api/request-response-types/models/Shop'
import { StylistForList } from '@utils/api/request-response-types/models/Stylist'
import { UserForList } from '@utils/api/request-response-types/models/User'
import {
  MenuResponse,
  ReservationResponse,
  ShopResponse,
  StylistResponse
} from '@utils/api/request-response-types/Shop'
import { UserResponse } from '@utils/api/request-response-types/User'

export interface Items {
  users?: UserForList[]
  user?: UserForList
  shops?: ShopForList[]
  shop?: ShopForList
  reservations?: Record<string, any>
  reservation?: ReservationForList
  stylists?: StylistForList[]
  stylist?: StylistForList
  menus?: MenuForList[]
  menu?: MenuForList
}

export interface DetailItems {
  user?: UserResponse
  shop?: ShopResponse
  reservation?: ReservationResponse
  stylist?: StylistResponse
  menu?: MenuResponse
}
