import { PATHS } from '@constants/paths'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Reservation from './Reservation'

const ReservationIndex = () => {
  return (
    <Switch>
      <Route
        exact
        path={`${PATHS.RESERVATION}/:shopId`}
        component={Reservation}
      />
    </Switch>
  )
}

export { ReservationIndex as Reservation }
