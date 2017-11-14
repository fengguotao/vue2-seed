import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index.vue'
import About from '@/views/about.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/about', name: 'About', component: About }
  ]
})
