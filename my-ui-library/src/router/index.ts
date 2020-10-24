import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MyButtonView from '../views/MyButtonView.vue'
import GridView from '../views/GridView.vue'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/MyButton',
    name: 'MyButtonView',
    component: MyButtonView
  },

  {
    path: '/Grid',
    name: 'GridView',
    component: GridView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router