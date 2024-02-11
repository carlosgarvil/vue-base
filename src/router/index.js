// router/router.js

import { createRouter, createWebHistory } from 'vue-router'
// Import your components
import Home from '@/components/Home.vue';
import VueFundamentals from '@/components/VueFundamentals.vue';
import Api from '@/components/Api.vue';
import Components from '@/components/Components.vue';
import Router from '@/components/Router.vue';
import ProductDetail from '@/components/ProductDetail.vue';
import Pinia from '@/components/Pinia.vue';

// Define your routes
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/fundamentals',
      name: 'fundamentals',
      component: VueFundamentals
    },
    {
      path: '/api',
      name: 'api',
      component: Api
    },
    {
      path: '/components',
      name: 'components',
      component: Components
    },
    {
      path: '/router',
      name: 'router',
      component: Router
    },
    {
      path: '/product/:id?',
      name: 'product',
      component: ProductDetail
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: Pinia
    }
  ]
})
// Create the router instance

export default router;
