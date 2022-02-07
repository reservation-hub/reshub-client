import { combineReducers } from 'redux'
import shop from './shopReducer'
import auth from './authReducer'
import location from './locationReducer'
import stylist from './stylistReducer'
import menus from './menuReducer'
import user from './userReducer'
import review from './reviewReducer'
import reservation from './reservationReducer'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'

export const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['isAuthenticated', 'user']
}

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  shop,
  location,
  stylist,
  menus,
  user,
  review,
  reservation
})

export default rootReducer
