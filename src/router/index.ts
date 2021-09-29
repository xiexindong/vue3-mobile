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
  {
    path: '/address/edit',
    name: 'AddressEdit',
    component: () => import(/* webpackChunkName: "AddressEdit" */ '@/views/address/AddressEdit')
  },
  {
    path: '/courseware',
    name: 'Courseware',
    component: () => import(/* webpackChunkName: "courseware" */ '@/views/courseware/index.vue'),
  },
  {
    path: '/courseware/setup',
    name: 'courseware/setup',
    component: ()=> import(/* webpackChunkName: "courseware/ref" */ '@/views/courseware/setup.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
