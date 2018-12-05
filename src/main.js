// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入mock数据
import "./mock/mockServer.js"
import store from "./store/index.js"
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,
})
