import instance from './index'
import authenticated from '@utils/api/endpoints/authenticated'
import users from '@utils/api/endpoints/users'
import shops from '@utils/api/endpoints/shops'
import location from '@utils/api/endpoints/location'
import reservation from '@utils/api/endpoints/reservation'
import stylist from '@utils/api/endpoints/stylist'
import menu from '@utils/api/endpoints/menu'
import dashboard from '@utils/api/endpoints/dashboard'

//-----------------------------------------------
// get method
//-----------------------------------------------

export const fetchAll = async () => await instance.get(`/`)

export const baseEndpoint = {
  shops: '/api/shops',
  users: '/api/users',
  area: '/api/areas',
  prefecture: '/api/prefectures',
  dashboard: '/api/dashboard',
  auth: '/api/auth'
} as const

const apiEndpoint = {
  fetchAll,
  dashboard,
  authenticated,
  users,
  shops,
  location,
  reservation,
  stylist,
  menu,
  instance
}

export default apiEndpoint
