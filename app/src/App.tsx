import React, { useEffect } from 'react'
import MainRouter from '@utils/routers'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { silentLogin } from '@store/actions/authAction'
import setAuthToken from '@utils/api/setAuthToken'
import history from './utils/routers/history'

function App() {
  const dispatch = useDispatch()
  const sessionToken: string = Cookies.get('sessionToken') ?? ''
  const authToken: string = Cookies.get('authToken') ?? ''
  const refreshToken: string = Cookies.get('refreshToken') ?? ''
  setAuthToken(sessionToken)

  // if (!authToken && !sessionToken && !refreshToken) {
  //   history.push('/auth')
  // }

  useEffect(() => {
    if (!authToken && !sessionToken && refreshToken) {
      dispatch(silentLogin())
    }
  }, [dispatch, sessionToken, authToken, refreshToken])

  return <MainRouter />
}

export default App
