import { createRouter, createWebHistory } from 'vue-router'
import Shop from '../views/Shop.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'shop',
      component: Shop
    }
  ]
})

export default router
