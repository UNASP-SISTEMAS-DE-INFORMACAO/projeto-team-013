import axios from 'axios'
import { getToken } from '../utils/user'

export const apiunasp = axios.create({
  baseURL: 'http://206.189.170.75:3001'
})

const api = axios.create({
  baseURL: 'http://192.168.1.29:3000'
})

api.interceptors.request.use(async config => {
  if (!config.url.endsWith('auth') || !config.url.endsWith('users')) {
    const userToken = await getToken()
    config.headers.Authorization = `Bearer ${userToken}`
  }

  return config
})

export default api
