import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'amfe-flexible'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)

Vue.config.productionTip = false
Vue.config.devtools = true;

//引用utils.ts命名空间，可以不引入
/// <reference path="./utils/utils.ts" />

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
