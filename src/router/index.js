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
    component: () => import('../views/Breath.vue')
  },
  {
    path: '/circulatory-system',
    name: 'Aparato circulatorio',
    component: () => import('../views/Circulatory.vue')
  },
  {
    path: '/digestive-system',
    name: 'Aparato digestivo',
    component: () => import('../views/Taxonomy.vue')
  },
  {
    path: '/reproductive-system',
    name: 'Aparato reproductor',
    component: () => import('../views/Taxonomy.vue')
  },
  {
    path: '/musculoskeletal-system',
    name: 'Aparato locomotor',
    component: () => import('../views/Taxonomy.vue')
  },
  {
    path: '/integumentary-system',
    name: 'Sistema integumentario',
    component: () => import('../views/Taxonomy.vue')
  },
  {
    path: '/nervous-system',
    name: 'Sistema nervioso',
    component: () => import('../views/Taxonomy.vue')
  },
  {
    path: '/lymphatic-system',
    name: 'Sistema linfálico-inmune',
    component: () => import('../views/Taxonomy.vue')
  },
  {
    path: '/myths',
    name: 'Mitos e historias',
    component: () => import('../views/Taxonomy.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router