import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  
  const axiosInstance = axios.create({
    baseURL: config.public.apiBase,
    timeout: 10000
  })

  // 请求拦截器
  axiosInstance.interceptors.request.use(
    (config) => {
      // 可以在这里添加 token
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  // 响应拦截器
  axiosInstance.interceptors.response.use(
    (response) => {
      return response.data
    },
    (error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            // 未授权，跳转登录
            console.error('未授权，请登录')
            break
          case 403:
            console.error('没有权限')
            break
          case 404:
            console.error('请求的资源不存在')
            break
          case 500:
            console.error('服务器错误')
            break
          default:
            console.error('请求失败')
        }
      }
      return Promise.reject(error)
    }
  )

  return {
    provide: {
      axios: axiosInstance
    }
  }
})