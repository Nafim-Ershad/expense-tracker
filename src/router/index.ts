import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from '@/views/HomePage.view.vue'
import ChartPageView from '@/views/ChartPage.view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePageView
    },
    {
      path: '/chart',
      name: 'chart',
      component: ChartPageView
    }
  ]
})

export default router
