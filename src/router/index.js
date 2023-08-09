import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/about', name: 'AboutPage', component: HomePage },
    { path: '/skills', name: 'SkillsPage', component: HomePage },
    { path: '/projects', name: 'ProjectsPage', component: HomePage },
    { path: '/contact', name: 'ContactPage', component: HomePage },
  ]
})

export default router
