import { createRouter, createWebHistory } from 'vue-router'
import  HomeLinux  from '../views/HomeLinux.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeLinux
    },
  ]
})

export default router
