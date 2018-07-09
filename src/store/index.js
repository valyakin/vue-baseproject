import Vue from 'vue'
import Vuex from 'vuex'

import * as modules from './modules'

Vue.use(Vuex)

export default (context) => new Vuex.Store({
  modules: Object.entries(modules)
    .map(([key, factory]) => ({[key]: factory(context)}))
    .reduce((p, c) => ({...p, ...c}), {}),
})
