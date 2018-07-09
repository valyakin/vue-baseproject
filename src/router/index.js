import Vue from 'vue'
import Router from 'vue-router'
import { Public } from 'src/pages'

Vue.use(Router)

export default (context) => {
  const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '',
        redirect: '/public',
      },
      {
        path: '/public',
        name: 'public',
        component: Public,
      },
    ],
  })

  return router
}
