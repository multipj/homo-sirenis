import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/taxonomy',
    name: 'Taxonomy',
    component: () => import('../views/Taxonomy.vue')
  },
  {
    path: '/respiratory-system',
    name: 'Aparato respiratorio',
    component: () => import('../views/Respiratory.vue')
  },
  {
    path: '/circulatory-system',
    name: 'Aparato circulatorio',
    component: () => import('../views/Circulatory.vue')
  },
  {
    path: '/digestive-system',
    name: 'Aparato digestivo',
    component: () => import('../views/Digestive.vue')
  },
  {
    path: '/reproductive-system',
    name: 'Aparato reproductor',
    component: () => import('../views/Reproductive.vue')
  },
  {
    path: '/musculoskeletal-system',
    name: 'Aparato locomotor',
    component: () => import('../views/Meskeletal.vue')
  },
  {
    path: '/integumentary-system',
    name: 'Sistema integumentario',
    component: () => import('../views/Integumentary.vue')
  },
  {
    path: '/nervous-system',
    name: 'Sistema nervioso',
    component: () => import('../views/Nervous.vue')
  },
  {
    path: '/lymphatic-system',
    name: 'Sistema linfálico-inmune',
    component: () => import('../views/Lymphatic.vue')
  },
  {
    path: '/myths',
    name: 'Mitos e historias',
    component: () => import('../views/Myths.vue')
  },
  {
    path: '/society',
    name: 'Sociedades y costumbres',
    component: () => import('../views/Costumbres.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router