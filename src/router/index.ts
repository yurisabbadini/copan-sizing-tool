import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "input" */ '../views/InputView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/SettingsView.vue')
  },
  {
    path: '/configurator',
    name: 'configurator',
    component: () => import(/* webpackChunkName: "configurator" */ '../views/ConfiguratorView.vue')
  },
  {
    path: '/output',
    name: 'output',
    component: () => import(/* webpackChunkName: "output" */ '../views/OutputView.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "users" */ '../views/UsersView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
