//--------------------------------------------
// set authorization token in instance header
//--------------------------------------------
import instance from '@utils/api/axiosBase'

/**
 * @param token: string
 * @example setAuthToken(responseToken)
 */
const setAuthToken = (token: string | undefined) => {
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete instance.defaults.headers.common['Authorization']
  }
}

export default setAuthToken
