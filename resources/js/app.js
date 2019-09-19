import './bootstrap'
import Vue from 'vue'
import router from './router.js'
import App from './App.vue'

require('./bootstrap')

const createApp = async () => {
  const app = new Vue({ // eslint-disable-line no-unused-vars
    el: '#app',
    router,
    components: { App },
    template: '<App />'
  })
}

createApp()
