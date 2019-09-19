import Vue from 'vue'
import VueRouter from 'vue-router'

import NotFound from './pages/errors/NotFound.vue'

import Test from '../js/pages/test.vue'
import Posts from '../js/pages/posts/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Test
  },
  {
    path: '/posts',
    component: Posts
  },
  // 404
  {
    path: '*',
    component: NotFound
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
