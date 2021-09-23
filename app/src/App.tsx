import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MainRouterPaths } from '@/constants/paths'

function App() {
  return (
    <Router>
      <Switch>
        {MainRouterPaths.map((router, index) => (
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

export default App
