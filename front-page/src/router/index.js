import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AeoPage from '../views/AeoPage.vue'
import IeoPage from '../views/IeoPage.vue'
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
    {
      path: '/aeo',
      name: 'AeoPage',
      component: AeoPage
    },
    {
      path: '/ieo',
      name: 'IeoPage',
      component: IeoPage
    }
  ]
})
export default router
