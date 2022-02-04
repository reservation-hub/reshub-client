import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { PRIVATE_PATHS, ROUTER_PATHS } from '@/constants/paths'
import history from './history'
import PrivateRouter from './PrivateRouter'

const MainRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        {PRIVATE_PATHS.map((router, index) => (
          <PrivateRouter
            key={index}
            path={router.path}
            exact={router.exact}
            component={router.component}
          />
        ))}
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
