import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import MyButtonView from '../views/MyButtonView.vue'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/MyButton',
    name: 'MyButtonView',
    component: MyButtonView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
