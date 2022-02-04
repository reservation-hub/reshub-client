import { PATHS } from '@/constants/paths'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Detail from './Detail'
import Salon from './Salon'

const ShopIndex = () => {
  return (
    <Switch>
      <Route exact path={PATHS.SHOPS} component={Salon} />
      {/* <Route path={`${PATHS.SHOPS}/(area|days|keyword|tags)`} component={Search} /> */}
      <Route path={`${PATHS.SHOPS}/detail/:id`} component={Detail} />
    </Switch>
  )
}

export { ShopIndex as Shop }
