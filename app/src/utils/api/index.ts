//----------------------------------
// api default settings
//----------------------------------
import axios, { AxiosInstance } from 'axios'

// apiサーバーの基準になるUrl
const BASE_URL: string = process.env.REACT_APP_BASE_URL

// axiosのインスタンス生成
const instance: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL
})

export default instance
