import { createStore, applyMiddleware, compose } from 'redux'
import { persistReducer } from 'redux-persist'

import rootReducer from '@store/reducer/rootReducer'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const persistConfig = {
  key: 'root',
  storage
}

const enhancedReducer = persistReducer(persistConfig, rootReducer)

const middleware = process.env.NODE_ENV !== 'production' ? [thunk] : [thunk]

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    typeof window !== 'undefined' &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const store = createStore(
  enhancedReducer,
  composeEnhancer(applyMiddleware(...middleware))
)

export default store
