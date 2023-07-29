import Vue from 'vue'
import VueRouter from 'vue-router'
import { MainView } from '../views/MainView'
import { DetailView } from '../views/DetailView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/pokemon/:id',
    name: 'detail',
    component: DetailView
  },
]

const router = new VueRouter({
  routes
})

export default router
