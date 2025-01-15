import AboutPage from '@/components/AboutPage.vue'
import Home from '@/components/Home.vue'
import LoginPage from '@/components/LoginPage.vue';
import RegisterPage from '@/components/RegisterPage.vue';
import { createWebHistory, createRouter } from 'vue-router'


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: AboutPage },
  { path: '/register', component: RegisterPage },
  { path: '/login', component: LoginPage},
]

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;