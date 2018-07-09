// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { sync } from 'vuex-router-sync'

import storeFactory from 'src/store'
import routerFactory from 'src/router'
import App from './App.vue'
import './styles/_global.scss'

Vue.config.productionTip = false

const store = storeFactory({})
const router = routerFactory({})

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})
