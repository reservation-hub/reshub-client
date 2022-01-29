import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ROUTER_PATHS } from '@/constants/paths'

const MainRouter = () => {
  return (
    <Router>
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
