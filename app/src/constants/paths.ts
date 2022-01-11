import Login from '@/pages/auth/Login'
import Error from '@pages/error/Error'
import Main from '@pages/main/Main'
import { RouteComponentProps } from 'react-router-dom'


//----------------------------------------
// TODO あくまでも仮であってある程度要件が定まり次第リファクタすること
//----------------------------------------

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

export const ROUTER_PATHS: TRouter[] = [
  { path: '/', exact: true, component: Main },
  { path: '/salon', exact: false },
  { path: '/review', exact: false },
  { path: '/catalog', exact: false },
  { path: '/user', exact: false },
  { path: '/reservations', exact: false },
  { path: '/search', exact: false },
  { path: '/login', exact: false, component: Login },
  { path: '*', exact: false, component: Error }
]

export const PRIVATE_MENU: { path: string; text: string }[] = [
  { path: '/salon', text: '美容室' },
  { path: '/catalog', text: 'カタログ' },
  { path: '/reservations/search', text: '予約管理' },
  { path: '/user/:id', text: 'マイページ' },
  { path: '/logout', text: 'ログアウト' }
]

export const PUBLIC_MENU: { path: string; text: string }[] = [
  { path: '/salon', text: '美容室' },
  { path: '/catalog', text: 'カタログ' },
  { path: '/reservations/search', text: '予約管理' },
  { path: '/login', text: 'ログイン' }
]
