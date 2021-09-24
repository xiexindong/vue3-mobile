import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  },
  {
    path:'/about',
    name:'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/about.vue')
  },
  {
    path:'/todo',
    name:'todo',
    component: () => import(/* webpackChunkName: "todo" */ '@/views/ToDoList.vue')
  },
  {
    path: '/address/list',
    name: 'Address',
    component: () => import(/* webpackChunkName: "address" */ '@/views/address/AddressList')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
