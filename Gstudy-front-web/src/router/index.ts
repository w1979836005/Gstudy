import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const baseUrl = '/'
const router = createRouter({
  history: createWebHistory(baseUrl),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../layouts/UserLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/user/LoginView.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('../views/user/RegisterView.vue'),
        },
      ],
    },
  ],
})

export default router
