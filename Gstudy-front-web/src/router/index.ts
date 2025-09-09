import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/homeView.vue'
import QuestionView from '@/views/QuestionView.vue'
import BasicLayout from '@/layouts/basicLayout.vue'
import AboutView from '@/views/aboutView.vue'
import CourseView from '@/views/courseView.vue'
import UserLayout from '@/layouts/userLayout.vue'
import LoginView from '@/views/user/loginView.vue'
import RegisterView from '@/views/user/registerView.vue'

const baseUrl = '/'
const router = createRouter({
  history: createWebHistory(baseUrl),
  routes: [
    {
      path: '/',
      name: 'basicLayout',
      component: BasicLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'course',
          name: 'course',
          component: CourseView,
        },
        {
          path: 'question',
          name: 'question',
          component: QuestionView,
        },
        {
          path: 'about',
          name: 'about',
          component: AboutView,
        },
      ],
    },
    {
      path: '/user',
      name: 'user',
      component: UserLayout,
      children: [
        {
          path: 'login',
          name: 'login',
          component: LoginView,
        },
        {
          path: 'register',
          name: 'register',
          component: RegisterView,
        },
      ],
    },
  ],
})

export default router
