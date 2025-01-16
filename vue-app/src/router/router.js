import AboutPage from "@/components/AboutPage.vue";
import BookDetails from "@/components/BookDetails.vue";
import BookForm from "@/components/BookForm.vue";
import BooksFavourites from "@/components/BooksFavourites.vue";
import BooksWishlist from "@/components/BooksWishlist.vue";
import Home from "@/components/Home.vue";
import LoginPage from "@/components/LoginPage.vue";
import RegisterPage from "@/components/RegisterPage.vue";
import { isLoggedIn } from "@/firebaseConfig";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: AboutPage },
  {
    path: "/register",
    component: RegisterPage,
    beforeEnter: (to, from, next) => {
      if (isLoggedIn()) {
        next("/");
      } else {
        next(); // Allow access to /register
      }
    },
  },
  {
    path: "/login",
    component: LoginPage,
    beforeEnter: (to, from, next) => {
      if (isLoggedIn()) {
        next("/");
      } else {
        next();
      }
    },
  },
  {
    path: "/create",
    component: BookForm,
    beforeEnter: (to, from, next) => {
      if (!isLoggedIn()) {
        next("/login");
      } else {
        next();
      }
    },
  },
  { path: "/book/:id", component: BookDetails },
  {
    path: "/wishlist",
    component: BooksWishlist,
    beforeEnter: (to, from, next) => {
      if (!isLoggedIn()) {
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: "/favourites",
    component: BooksFavourites,
    beforeEnter: (to, from, next) => {
      if (!isLoggedIn()) {
        next("/login");
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
