import Login from '@pages/auth/Login'
import Error from '@pages/error/Error'
import Main from '@pages/main/Main'
import { RouteComponentProps } from 'react-router-dom'
import MyPage from '@/pages/user/MyPage'
import { Shop } from '@/pages/shop/ShopIndex'
import { User } from '@/pages/user/UserIndex'

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
  USER: '/mypage',
  RESERVATION: '/reservation',
  LOGIN: '/login',
  SIGNUP: '/signup',
  LOGOUT: '/logout',
  ERROR: '*'
} as const

export const ROUTER_PATHS: TRouter[] = [
  { path: PATHS.MAIN, exact: true, component: Main },
  { path: PATHS.SHOPS, exact: false, component: Shop },
  { path: PATHS.REVIEW, exact: false },
  { path: PATHS.LOGIN, exact: false, component: Login },
  { path: PATHS.SIGNUP, exact: false },
  { path: PATHS.ERROR, exact: false, component: Error }
]

export const PRIVATE_PATHS: TRouter[] = [
  { path: PATHS.USER, exact: false, component: User },
  { path: PATHS.RESERVATION, exact: false }
]

export const PRIVATE_MENU: { path: string; text: string }[] = [
  { path: PATHS.SHOPS, text: '美容室' },
  { path: `${PATHS.USER}`, text: 'マイページ' },
  { path: PATHS.LOGOUT, text: 'ログアウト' }
]

export const PUBLIC_MENU: { path: string; text: string }[] = [
  { path: PATHS.SHOPS, text: '美容室' },
  { path: PATHS.LOGIN, text: 'ログイン' }
]

export const MYPAGE_MENU: { path: string; text: string }[] = [
  { path: `${PATHS.USER}`, text: 'マイページトップ' },
  { path: `${PATHS.USER}/reservations`, text: '予約履歴' },
  { path: `${PATHS.USER}/reviews`, text: '口コミ履歴' },
  { path: `${PATHS.USER}/edit`, text: '会員情報編集' },
  { path: `${PATHS.USER}/changePassword`, text: 'パスワード変更' }
]
