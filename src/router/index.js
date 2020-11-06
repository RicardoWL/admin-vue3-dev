import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout'

import hrmRouters from './modules/hrm'

export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true,
  },
]

export const asyncRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    meta: {
      title: '首页',
      icon: 'home-4-line',
    },
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/index'),
        meta: {
          title: '首页',
          icon: 'home-4-line',
        },
      },
    ],
  },

  hrmRouters,

  {
    path: '/*',
    redirect: '/404',
    hidden: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRouterMap,
})

export default router
