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
import Chart from 'chart.js';

Vue.use(ElementUI, { locale })




Vue.config.productionTip = false
Vue.prototype.$chart = Chart;
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
