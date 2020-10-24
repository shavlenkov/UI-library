import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MyButtonView from '../views/MyButtonView.vue'
import GridView from '../views/GridView.vue'
import ModalView from '../views/ModalView.vue'
import CarouselView from '../views/CarouselView.vue'

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

  {
    path: '/Modal',
    name: 'ModalView',
    component: ModalView
  },

  {
    path: '/Carousel',
    name: 'CarouselView',
    component: CarouselView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router