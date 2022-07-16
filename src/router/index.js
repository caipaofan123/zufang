import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/',
    component: () => import('@/views/Layout'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/Home')
      },
      {
        path: '/list',
        component: () => import('@/views/List')
      },
      {
        path: '/news',
        component: () => import('@/views/News')
      },
      {
        path: '/profile',
        component: () => import('@/views/My')
      }
    ]
  },
  {
    path: '/favorate',
    component: () => import('@/views/Favorate')
  }
]

const router = new VueRouter({
  routes
})

export default router
