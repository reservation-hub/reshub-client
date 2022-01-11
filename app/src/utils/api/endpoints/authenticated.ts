//-----------------------------------------------
// authenticate
//-----------------------------------------------
import instance from '@utils/api'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import {
  localAuthenticationQuery,
  loginResponse
} from '@utils/api/request-response-types/Auth'
import { AxiosResponse } from 'axios'

export const localLogin = async (
  formData: localAuthenticationQuery
): Promise<AxiosResponse<loginResponse>> => {
  return await instance.post<loginResponse>(`${baseEndpoint.auth}/login`, {
    email: formData.email,
    password: formData.password
  })
}

export const googleLogin = async (provider: string, tokenId: string) => {
  return await instance.post(`${baseEndpoint.auth}/google`, {
    provider,
    tokenId
  })
}

export const silentRefresh = async () => {
  return await instance.post(`${baseEndpoint.auth}/silent_refresh`)
}

export const logout = async () => {
  return await instance.get(`${baseEndpoint.auth}/logout`)
}

const authenticated = {
  localLogin,
  googleLogin,
  silentRefresh,
  logout
}

export default authenticated
