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
  {
    path: '/courseware/2-expose',
    name: 'courseware/2-expose',
    component: ()=> import(/* webpackChunkName: "courseware/2-expose" */ '@/views/courseware/2-expose/parent.vue')
  },
  {
    path: '/courseware/2-emit',
    name: 'courseware/2-emit',
    component: ()=> import(/* webpackChunkName: "courseware/2-expose" */ '@/views/courseware/2-emit/parent.vue')
  },
  {
    path: '/courseware/2-slots',
    name: 'courseware/2-slots',
    component: ()=> import(/* webpackChunkName: "courseware/2-slots" */ '@/views/courseware/2-slots/parent.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
