import React from 'react'
import { PATHS } from '@/constants/paths'
import { Route, Switch } from 'react-router-dom'
import MyPage from './MyPage'
import Error from '@pages/error/Error'
import MyReservation from './MyReservation'
import MyReviews from './MyReviews'
import MyInformationEdit from './MyInformationEdit'
import MyPasswordChange from './MyPasswordChange'

const UserIndex = () => {
  return (
    <Switch>
      <Route exact path={PATHS.USER} component={MyPage} />
      <Route path={`${PATHS.USER}/(edit|reservations|reviews|changePassword)`}>
        {location.pathname === `${PATHS.USER}/edit` ? (
          <MyInformationEdit />
        ) : location.pathname === `${PATHS.USER}/reservations` ? (
          <MyReservation />
        ) : location.pathname === `${PATHS.USER}/reviews` ? (
          <MyReviews />
        ) : (
          <MyPasswordChange />
        )}
      </Route>
      <Route path={`${PATHS.USER}/(edit|reservations)/:id`} />
      <Route path={`${PATHS.USER}/*`} component={Error} />
    </Switch>
  )
}

export { UserIndex as User }
