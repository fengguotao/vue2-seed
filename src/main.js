import Vue from 'vue'
import 'normalize.css'
import App from './App'
import router from './router'
import './assets/less/app.less'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
