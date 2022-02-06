import React, { useEffect } from 'react'
import MainRouter from '@utils/routers'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { silentLogin } from '@store/actions/authAction'
import setAuthToken from '@utils/api/setAuthToken'

function App() {
  const dispatch = useDispatch()
  const sessionToken: string = Cookies.get('sessionToken') ?? ''
  const authToken: string = Cookies.get('authToken') ?? ''
  const refreshToken: string = Cookies.get('refreshToken') ?? ''
  setAuthToken(sessionToken)

  useEffect(() => {
    if (!authToken && !sessionToken && refreshToken) {
      dispatch(silentLogin())
    }
  }, [dispatch, sessionToken, authToken, refreshToken])

  return <MainRouter />
}

export default App
