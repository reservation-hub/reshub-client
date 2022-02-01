import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { ROUTER_PATHS } from '@/constants/paths'
import history from './history'

const MainRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        {ROUTER_PATHS.map((router, index) => (
          <Route
            key={index}
            path={router.path}
            exact={router.exact}
            component={router.component}
          />
        ))}
      </Switch>
    </Router>
  )
}

export default MainRouter
