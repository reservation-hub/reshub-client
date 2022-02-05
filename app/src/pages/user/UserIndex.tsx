import React from 'react'
import { PATHS } from '@/constants/paths'
import { Route, Switch } from 'react-router-dom'
import MyPage from './MyPage'
import Error from '@pages/error/Error'

const UserIndex = () => {
  return (
    <Switch>
      <Route exact path={PATHS.USER} component={MyPage} />
      <Route path={`${PATHS.USER}/(edit|reservations|reviews|changePassword)`}>
        {location.pathname === `${PATHS.USER}/edit` ? (
          <div>hoge</div>
        ) : location.pathname === `${PATHS.USER}/reservations` ? (
          <div>hogehoge</div>
        ) : (
          <div>fuga</div>
        )}
      </Route>
      <Route path={`${PATHS.USER}/(edit|reservations)/:id`} />
      <Route path={`${PATHS.USER}/*`} component={Error} />
    </Switch>
  )
}

export { UserIndex as User }
