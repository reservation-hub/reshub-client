import Login from '@/pages/auth/Login'

//----------------------------------------
// TODO あくまでも仮であってある程度要件が定まり次第リファクタすること
//----------------------------------------
export const MainRouterPaths: {
  path: string
  exact?: boolean
  component?: () => JSX.Element
}[] = [
  { path: '/', exact: true, component: Login },
  { path: '/salon' },
  { path: '/review' },
  { path: '/catalog' },
  { path: '/user' },
  { path: '/reservations' },
  { path: '/search' },
  { path: '*' }
]

export const NavMenu: { path: string; text: string }[] = [
  { path: '/salon', text: '美容室' },
  { path: '/catalog', text: 'カタログ' },
  { path: '/reservations/search', text: '予約管理' },
  { path: '/user/:id', text: 'マイページ' }
]
