//----------------------------------
// axios instance default settings
//----------------------------------
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export interface CustomInstance extends AxiosInstance {
  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R>
  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R>
  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: Record<string, any>,
    config?: AxiosRequestConfig
  ): Promise<R>
  patch<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: Record<string, any>,
    config?: AxiosRequestConfig
  ): Promise<R>
}

const BASE_URL = process.env.REACT_APP_BASE_URL

const instance: CustomInstance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL
})

export default instance
