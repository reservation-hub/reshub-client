import React from 'react'
import { RootState } from '@store/store'
import { useSelector } from 'react-redux'
import { Redirect, Route, RouteProps } from 'react-router-dom'

const PrivateRouter = ({ children, ...rest }: RouteProps) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)

  return (
    <>
      {isAuthenticated ? (
        <Route {...rest}>{children}</Route>
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { failed: 'auth error' }
          }}
        />
      )}
    </>
  )
}

export default PrivateRouter
