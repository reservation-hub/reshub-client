//----------------------------------
// redux reducer ユーザー印証
//----------------------------------
import { AuthState, AUTH_TYPE } from '@store/types/authTypes'
import { AuthAction } from '@store/actions/authAction'
import { UserForAuth } from '@utils/api/request-response-types/models/User'

const initialState: AuthState = {
  loading: false,
  isAuthenticated: false,
  user: {} as UserForAuth,
  msg: ''
}

const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case AUTH_TYPE.REQUEST_START:
      return {
        ...state,
        loading: true
      }
    case AUTH_TYPE.REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload
      }
    case AUTH_TYPE.REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        msg: action.payload
      }
    case AUTH_TYPE.LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: false
      }
    default:
      return state
  }
}

export default authReducer
