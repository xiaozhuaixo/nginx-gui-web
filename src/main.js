import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import 'font-awesome/css/font-awesome.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control

import VueSocketio from 'vue-socket.io'

Vue.use(ElementUI, { locale })

// const socket = new VueSocketio({
//     debug: true,
//     connection: 'http://localhost:8080/Dashboard',
// });
// console.log(socket)

// Vue.use(socket);

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
