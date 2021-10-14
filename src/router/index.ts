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
  {
    path: '/courseware/2-props',
    name: 'courseware/2-props',
    component: ()=> import(/* webpackChunkName: "courseware/2-props" */ '@/views/courseware/2-props/parent.vue')
  },
  {
    path: '/courseware/1-life',
    name: 'courseware/1-life',
    component: ()=> import(/* webpackChunkName: "courseware/1-life" */ '@/views/courseware/1-life/index.vue')
  },
  {
    path: '/courseware/3-ref',
    name: 'courseware/3-ref',
    component: ()=> import(/* webpackChunkName: "courseware/3-ref" */ '@/views/courseware/3-ref/index.vue')
  },
  {
    path: '/courseware/3-reactive',
    name: 'courseware/3-reactive',
    component: ()=> import(/* webpackChunkName: "courseware/3-reactive" */ '@/views/courseware/3-reactive/index.vue')
  },
  {
    path: '/courseware/3-toRefs',
    name: 'courseware/3-toRefs',
    component: ()=> import(/* webpackChunkName: "courseware/3-toRefs" */ '@/views/courseware/3-toRefs/index.vue')
  },
  {
    path: '/courseware/3-computed',
    name: 'courseware/3-computed',
    component: ()=> import(/* webpackChunkName: "courseware/3-computed" */ '@/views/courseware/3-computed/index.vue')
  },
  {
    path: '/courseware/3-watch',
    name: 'courseware/3-watch',
    component: ()=> import(/* webpackChunkName: "courseware/3-watch" */ '@/views/courseware/3-watch/index.vue')
  },
  {
    path: '/courseware/3-watchEffect',
    name: 'courseware/3-watchEffect',
    component: ()=> import(/* webpackChunkName: "courseware/3-watchEffect" */ '@/views/courseware/3-watchEffect/index.vue')
  },
  {
    path: '/courseware/4-provide',
    name: 'courseware/4-provide',
    component: ()=> import(/* webpackChunkName: "courseware/4-provide" */ '@/views/courseware/4-provide/parent.vue')
  },
  {
    path: '/courseware/4-provide2',
    name: 'courseware/4-provide2',
    component: ()=> import(/* webpackChunkName: "courseware/4-provide" */ '@/views/courseware/4-provide2/parent.vue')
  },
]

 
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
