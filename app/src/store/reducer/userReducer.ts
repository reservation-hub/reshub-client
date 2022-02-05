import { UserResponse } from '@/utils/api/request-response-types/client/User'
import { UserAction } from '../actions/userAction'
import { UsersState, USER_TYPE } from '../types/usersTypes'

const initialState: UsersState = {
  loading: false,
  msg: '',
  user: {} as UserResponse
}

const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case USER_TYPE.REQUEST_START:
      return {
        ...state,
        loading: true
      }
    case USER_TYPE.REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    case USER_TYPE.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    case USER_TYPE.EDIT_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    case USER_TYPE.DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    case USER_TYPE.REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        msg: action.payload
      }
    default:
      return state
  }
}

export default userReducer
