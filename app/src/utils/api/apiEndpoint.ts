import instance from './index'
import authenticated from '@utils/api/endpoints/authenticated'
import users from '@utils/api/endpoints/users'
import shops from '@utils/api/endpoints/shops'
import location from '@utils/api/endpoints/location'
import reservation from '@utils/api/endpoints/reservation'
import stylist from '@utils/api/endpoints/stylist'
import menu from '@utils/api/endpoints/menu'
import review from '@utils/api/endpoints/review'

//-----------------------------------------------
// get method
//-----------------------------------------------

export const fetchAll = async () => await instance.get(`/`)

export const baseEndpoint = {
  shops: '/client/shops',
  users: '/client/users',
  area: '/client/areas',
  prefecture: '/client/prefectures',
  auth: '/client/auth'
} as const

const apiEndpoint = {
  fetchAll,
  authenticated,
  users,
  shops,
  location,
  reservation,
  stylist,
  menu,
  review,
  instance
}

export default apiEndpoint
