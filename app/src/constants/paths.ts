import Login from '@pages/auth/Login'
import Salon from '@pages/shop/Salon'
import Error from '@pages/error/Error'
import Main from '@pages/main/Main'
import { RouteComponentProps } from 'react-router-dom'

export type TStaticContext = {
  statusCode?: number | undefined
}

export type TRouter = {
  path: string
  exact: boolean
  component?:
    | React.ComponentType<any>
    | React.ComponentType<RouteComponentProps<any, TStaticContext, unknown>>
    | undefined
}

export const PATHS = {
  MAIN: '/',
  SHOPS: '/salon',
  REVIEW: '/review',
  CATALOG: '/catalog',
  USER: '/user',
  RESERVATION: '/reservation',
  SEARCH: '/search',
  LOGIN: '/login',
  SIGNUP: '/signup',
  LOGOUT: '/logout',
  ERROR: '*'
} as const

export const ROUTER_PATHS: TRouter[] = [
  { path: PATHS.MAIN, exact: true, component: Main },
  { path: PATHS.SHOPS, exact: false, component: Salon },
  { path: PATHS.REVIEW, exact: false },
  { path: PATHS.CATALOG, exact: false },
  { path: PATHS.USER, exact: false },
  { path: PATHS.RESERVATION, exact: false },
  { path: PATHS.SEARCH, exact: false },
  { path: PATHS.LOGIN, exact: false, component: Login },
  { path: PATHS.SIGNUP, exact: false },
  { path: PATHS.ERROR, exact: false, component: Error }
]

export const PRIVATE_MENU: { path: string; text: string }[] = [
  { path: PATHS.SHOPS, text: '美容室' },
  { path: PATHS.CATALOG, text: 'カタログ' },
  { path: `${PATHS.RESERVATION}${PATHS.SEARCH}`, text: '予約管理' },
  { path: `${PATHS.USER}/:id`, text: 'マイページ' },
  { path: PATHS.LOGOUT, text: 'ログアウト' }
]

export const PUBLIC_MENU: { path: string; text: string }[] = [
  { path: PATHS.LOGIN, text: 'ログイン' }
]
