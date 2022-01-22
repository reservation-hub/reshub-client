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

export type RootState = ReturnType<typeof store.getState>
export type DefaultState = {
  loading: boolean
  msg?: string
}

export function typedAction<T extends string>(type: T): { type: T }
export function typedAction<T extends string, P extends any>(
  type: T,
  payload: P
): { type: T; payload: P }

export function typedAction(type: string, payload?: any) {
  return { type, payload }
}

export default store
