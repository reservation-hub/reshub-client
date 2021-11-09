import Error from '@pages/error/Error'
import Main from '@pages/main/Main'

//----------------------------------------
// TODO あくまでも仮であってある程度要件が定まり次第リファクタすること
//----------------------------------------
export const ROUTER_PATHS: {
  path: string
  exact?: boolean
  component?: () => JSX.Element
}[] = [
  { path: '/', exact: true, component: Main },
  { path: '/salon' },
  { path: '/review' },
  { path: '/catalog' },
  { path: '/user' },
  { path: '/reservations' },
  { path: '/search' },
  { path: '*', component: Error }
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
