// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import VueI18n from 'vue-i18n'
import myZhLocale from './locales/zh/index'
import myEnLocale from './locales/en/index'

Vue.config.productionTip = false

Vue.use(VueI18n)

const messages = {
  zh: myZhLocale,
  en: myEnLocale
}
const i18n = new VueI18n({
  locale: 'en', // 语言标识
  messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  ...App,
  components: { App },
  template: '<App/>'
})
