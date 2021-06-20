import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    meta: { guess: true },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    meta: { guess: true },
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: { guess: true },
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/history',
    name: 'History',
    meta: { guess: true },
    component: () => import('../views/History.vue')
  },
  {
    path: '/isconnectaccount',
    name: 'ConnectAcc',
    meta: { guess: true },
    component: () => import('../views/ConnectAcc.vue')
  },
  {
    path: '/autopost',
    name: 'Autopost',
    meta: { guess: true },
    component: () => import('../views/Autopost.vue')
  },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

export default router