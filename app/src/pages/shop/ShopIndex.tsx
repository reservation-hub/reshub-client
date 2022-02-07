import { PATHS } from '@constants/paths'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Detail from './detail/Detail'
import Shop from './list/Shop'
import Search from './Search'

const ShopIndex = () => {
  return (
    <Switch>
      <Route exact path={PATHS.SHOPS} component={Shop} />
      <Route
        path={`${PATHS.SHOPS}/(area|days|keyword|tags)`}
        component={Search}
      />
      <Route path={`${PATHS.SHOPS}/detail/:id`} component={Detail} />
    </Switch>
  )
}

export { ShopIndex as Shop }
