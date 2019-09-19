import Vue from 'vue'
import VueRouter from 'vue-router'

import test from '../js/pages/test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: test
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
