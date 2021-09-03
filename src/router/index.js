import VueRouter from 'vue-router'
import Vue from 'vue'
import menu from '@/config/menu'

Vue.use(VueRouter)

let routes = [
  {
    path: '/layout',
    component: () => import('@/layout/Layout'),
    children: []
  },
  {
    path: '/',
    component: () => import('@/views/login/Index')
  },
]

menu.forEach(value => {
  if (value.children) {
    value.children.forEach(val => {
      routes[0].children.push({
        path: val.path,
        component: val.component
      })
    })
  } else {
    routes[0].children.push({
      path: value.path,
      component: value.component
    })
  }
})

const router = new VueRouter({
  routes,
  mode: 'hash'
})

router.beforeEach((to, from, next) => {
  if (to.path === '/layout') {
    next({
      path: '/general/about'
    })
  } else {
    next()
  }
})

export default router
