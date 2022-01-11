import instance from './index'

const setAuthToken = (token: string | undefined) => {
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete instance.defaults.headers.common['Authorization']
  }
}

export default setAuthToken
