import { combineReducers } from 'redux'
import shop from './shopReducer'
import auth from './authReducer'
import location from './locationReducer'
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
  location
})

export default rootReducer
