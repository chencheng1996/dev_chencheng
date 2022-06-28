import { createStore } from 'vuex'
import { getToken } from '@/utils/auth'

export default createStore({
  state: {
    token: getToken(),
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
