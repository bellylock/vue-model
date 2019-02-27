// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 兼容开始 兼容程度有限，不能兼容所有的问题
import 'babel-polyfill'
if(Number.parseInt === undefined ) Number.parseInt = window.parseInt;
if( Number.parseFloat === undefined) Number.parseFloat = window.parseFloat;
// 兼容结束

import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import '@/assets/global.scss'
import Vueclipboard from 'vue-clipboard2'
 

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(iView);
Vue.use(Vueclipboard);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
