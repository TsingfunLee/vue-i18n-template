import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import i18n from './locale/index'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './style/common.scss'

import TitleBar from './components/TitleBar/Index'
import DeviderTitle from './components/DeviderTitle/Index'

Vue.component('titleBar', TitleBar)
Vue.component('deviderTitle', DeviderTitle)

Vue.use(Element, { size: 'medium', i18n: (key, value) => i18n.t(key, value) })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
