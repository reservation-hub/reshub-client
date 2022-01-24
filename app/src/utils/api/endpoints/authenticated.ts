//-----------------------------------------------
// authenticate
//-----------------------------------------------
import instance from '@utils/api'
import { baseEndpoint } from '@utils/api/apiEndpoint'
import {
  localAuthenticationQuery,
  loginResponse
} from '@utils/api/request-response-types/client/Auth'
import { AxiosResponse } from 'axios'

export const localLogin = async (
  formData: localAuthenticationQuery
): Promise<AxiosResponse<loginResponse>> => {
  return await instance.post<loginResponse>(`${baseEndpoint.auth}/login`, {
    username: formData.username,
    password: formData.password
  })
}

export const googleLogin = async (
  provider: string,
  tokenId: string
): Promise<AxiosResponse<loginResponse>> => {
  return await instance.post<loginResponse>(`${baseEndpoint.auth}/google`, {
    provider,
    tokenId
  })
}

export const silentRefresh = async (): Promise<
  AxiosResponse<loginResponse>
> => {
  return await instance.post<loginResponse>(
    `${baseEndpoint.auth}/silent_refresh`
  )
}

export const logout = async (): Promise<AxiosResponse<string>> => {
  return await instance.get<string>(`${baseEndpoint.auth}/logout`)
}

const authenticated = {
  localLogin,
  googleLogin,
  silentRefresh,
  logout
}

export default authenticated
