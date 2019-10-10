import './bootstrap'
import Vue from 'vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import router from './router'
import App from './App.vue'

// 定数
import statusCode from './config/statusCode'
// mixins
import loader from './mixins/global/loader'

Vue.prototype.$statusCode = statusCode
Vue.use(Loading)
Vue.mixin(loader)

require('./bootstrap')

const createApp = async () => {
  const app = new Vue({ // eslint-disable-line no-unused-vars
    el: '#app',
    router,
    components: { App },
    template: '<App />',
  })
}

createApp()
