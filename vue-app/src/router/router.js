import AboutPage from '@/components/AboutPage.vue'
import BookDetails from '@/components/BookDetails.vue';
import BookForm from '@/components/BookForm.vue';
import Home from '@/components/Home.vue'
import LoginPage from '@/components/LoginPage.vue';
import RegisterPage from '@/components/RegisterPage.vue';
import { createWebHistory, createRouter } from 'vue-router'


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: AboutPage },
  { path: '/register', component: RegisterPage },
  { path: '/login', component: LoginPage },
  { path: '/create', component: BookForm },
  { path: '/book/:id', component: BookDetails }
]

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;