import AboutPage from '@/components/AboutPage.vue'
import Home from '@/components/Home.vue'
import { createWebHistory, createRouter } from 'vue-router'


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: AboutPage },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;