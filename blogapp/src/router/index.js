import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MakaleEkle from '../views/MakaleEkle.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/Ekle',
    name: 'Ekle',
    component: MakaleEkle
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
