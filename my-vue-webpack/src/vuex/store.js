import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isLoading: false,
  direction: 'forward',
  locale: 'zh-CN'
}

let store = new Vuex.Store({
  state,
  mutations: {
    UPDATE_LOADING (state, status) {
      state.isLoading = status
    },
    UPDATE_DIRECTION (state, direction) {
      state.direction = direction
    },
    UPDATE_LOCALE (state, locale) {
      state.locale = locale
    }
  }
})
// set the start locale to use
store.commit('UPDATE_LOCALE', 'zh-CN')
export default store
