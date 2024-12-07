import type { InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'

export const axiosInstance = axios.create()

const setupConfig = (config: InternalAxiosRequestConfig) => {
  config.headers.authorization = `Bearer test`

  return config
}

axiosInstance.interceptors.request.use(setupConfig)
