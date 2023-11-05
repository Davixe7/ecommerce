import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout.vue'
import Shop from '../views/Shop.vue'
import Cart from '../views/Cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {path: '', name: 'shop', component: Shop},
        {path: '/cart', name: 'cart', component: Cart},
      ]
    }
  ]
})

export default router
