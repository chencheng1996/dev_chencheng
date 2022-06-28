'use strict'
import store from "@/store";
import axios from 'axios'

const config = {
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 60 * 1000, // 超时
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
}

const _axios = axios.create(config)

// 请求拦截器
_axios.interceptors.request.use(
  (config: any) => {
    if (store.getters.token) {
      config.headers.Token = store.getters.token;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// 响应拦截器
_axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default _axios
