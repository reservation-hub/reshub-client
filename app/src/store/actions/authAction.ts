//----------------------------------
// redux action ユーザー印証管理関数
//----------------------------------
import { AUTH_TYPE } from '@store/types/authTypes'
import { RootState, typedAction } from '@store/store'
import { GoogleLoginResponse } from 'react-google-login'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'
import apiEndpoint from '@utils/api/apiEndpoint'
import setAuthToken from '@utils/api/setAuthToken'
import history from '@utils/routers/history'
import Cookies from 'js-cookie'
import { UserForAuth } from '@utils/api/request-response-types/models/User'

//ユーザーのリクエストをスタートするアクション
const loginRequestStart = () => {
  return typedAction(AUTH_TYPE.REQUEST_START)
}

const fetchUser = (user: UserForAuth) => {
  return typedAction(AUTH_TYPE.REQUEST_SUCCESS, user)
}

//ユーザーのリクエストが失敗の時に実行するアクション
const loginRequestFailure = (msg: string) => {
  return typedAction(AUTH_TYPE.REQUEST_FAILURE, msg)
}

const logoutSuccess = (msg: string) => {
  return typedAction(AUTH_TYPE.LOGOUT_SUCCESS, msg)
}

// refresh tokenをサーバーに投げてユーザー情報をもらってくるアクション
export const silentLogin =
  (): ThunkAction<void, RootState, null, Action> => async (dispatch) => {
    try {
      const user = await apiEndpoint.authenticated.silentRefresh()
      const token = user.data.token

      Cookies.set('sessionToken', token, { expires: 1 })
      setAuthToken(token)

      dispatch(fetchUser(user.data.user))
      history.push('/')
    } catch (e: any) {
      dispatch(loginRequestFailure(e.response.data))
    }
  }

// localログインを実行するアクション
export const loginStart =
  (
    username: string,
    password: string
  ): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    dispatch(loginRequestStart())
    try {
      const user = await apiEndpoint.authenticated.localLogin({
        username,
        password
      })
      const token = user.data.token
      console.log(token)
      Cookies.set('sessionToken', token, { expires: 1 })
      setAuthToken(token)

      dispatch(fetchUser(user.data.user))
      history.push('/')
    } catch (e: any) {
      dispatch(loginRequestFailure(e.response.data))
    }
  }

// googleログインを実行するアクション
export const googleLogin =
  (
    googleResponse: GoogleLoginResponse
  ): ThunkAction<void, RootState, null, Action> =>
  async (dispatch) => {
    const provider = 'google'
    dispatch(loginRequestStart())
    try {
      const user = await apiEndpoint.authenticated.googleLogin(
        provider,
        googleResponse.tokenId
      )
      const token = user.data.token

      Cookies.set('sessionToken', token, { expires: 1 })
      setAuthToken(token)

      dispatch(fetchUser(user.data.user))
      history.push('/')
    } catch (e: any) {
      dispatch(loginRequestFailure(e.response.data))
    }
  }

// ログアウトを実行するアクション
export const logout =
  (): ThunkAction<void, RootState, null, Action> => async (dispatch) => {
    dispatch(loginRequestStart())
    try {
      setAuthToken(Cookies.get('sessionToken'))
      const message = await apiEndpoint.authenticated.logout()
      Cookies.remove('sessionToken')
      Cookies.remove('refreshToken')
      localStorage.clear()

      dispatch(logoutSuccess(message.data))
      history.push('/')
    } catch (e: any) {
      dispatch(loginRequestFailure(e.response.data))
    }
  }

export type AuthAction =
  | ReturnType<typeof loginRequestStart>
  | ReturnType<typeof fetchUser>
  | ReturnType<typeof loginRequestFailure>
  | ReturnType<typeof logoutSuccess>
