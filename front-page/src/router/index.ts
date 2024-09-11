import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IeoPage from '../views/IeoPage.vue'
import AeoPage from '../views/AeoPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    { path: '/aeo', name: 'aeo', component: () => import('../views/AeoPage.vue') },
    { path: '/ieo', name: 'ieo', component: () => import('../views/IeoPage.vue') }
  ]
})

export default router
