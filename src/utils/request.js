import axios from 'axios'
import Notify from 'element-ui/packages/notification'

import i18n from '@/locale/index'
import router from '@/router/index'
import Vue from 'vue'

let vm = new Vue({
  i18n,
  router
})

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 6000 // 请求超时时间
})

// 异常拦截处理器
const errorHandler = error => {
  console.log(error)
  if (error.message.includes('timeout')) {
    Notify({
      title: vm.$t('error'),
      message: vm.$t('networkTimeout')
    })

    return Promise.reject(error)
  }

  if (error.message.includes('401')) {
    Notify({
      title: vm.$t('error'),
      message: vm.$t('unauthorizedError')
    })
    vm.$router.push('/')

    return Promise.reject(error)
  }

  if (error.response) {
    console.log(error.response)
    Notify({
      title: vm.$t('error'),
      message: error.response.data || vm.$t('networkError')
    })
  }
  return Promise.reject(error)
}

// request interceptor
request.interceptors.request.use(config => {
  console.log('请求参数', config)

  return config
}, errorHandler)

// response interceptor
request.interceptors.response.use(response => {
  console.log(response)
  if (response.status === 200) {
    if (response.data instanceof Blob) {
      // 如果是下载文件
      return response
    }

    return response.data
  } else {
    Notify({
      title: vm.$t('error')
    })

    return Promise.resolve(response)
  }
}, errorHandler)

export default request
