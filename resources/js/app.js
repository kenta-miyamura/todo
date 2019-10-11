import './bootstrap'
import Vue from 'vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import router from './router'
import App from './App.vue'

// 設定ファイル
import statusCode from './config/statusCode'
import modalParams from './config/modalParams'
// mixins
import loader from './mixins/global/loader'
import modal from './mixins/global/modal/index'

Vue.prototype.$statusCode = statusCode
Vue.prototype.$modalParams = modalParams
Vue.use(Loading)
Vue.mixin(loader)
Vue.mixin(modal)

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
