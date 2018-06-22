// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import store from './store'
import echarts from 'echarts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './css/index.less'
import './css/element-variables.scss'


Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.prototype.$http = echarts;
Vue.http = axios;
Vue.http = echarts;
// axios.defaults.baseURL = '/api'

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
