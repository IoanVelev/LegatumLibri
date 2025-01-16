<script>
import { isLoggedIn } from "@/firebaseConfig";
import { getAuth, signOut } from "firebase/auth";

export default {
  data() {
    return {
      isLogged: isLoggedIn(),
    }
  },
  methods: {
    async onLogout() {
      try {
        const auth = getAuth();
        await signOut(auth);
        this.isLogged = isLoggedIn();
        console.log(this.isLogged);
        
        console.log("User logged out successfully.");
      } catch (error) {
        console.error("Error logging out:", error);
      }
      this.$route.push("/login");
    },
  },
};
</script>

<template>
  <nav class="navbar">
    <img id="logo" src="../assets/logo.png" />
    <div class="nav-container">
      <!-- Title -->
      <h1 class="app-title">LegatumLibri</h1>

      <!-- Navigation Links -->
      <ul class="nav-links">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li v-if="!isLogged"><RouterLink to="/register">Register</RouterLink></li>
        <li v-if="!isLogged"><RouterLink to="/login">Login</RouterLink></li>
        <li v-if="isLogged"><RouterLink to="/create">Create a book card</RouterLink></li>
        <li v-if="isLogged"><RouterLink to="/wishlist">Wishlist</RouterLink></li>
        <li v-if="isLogged"><RouterLink to="/favourites">Favourites</RouterLink></li>
        <li v-if="isLogged" @click="onLogout"><RouterLink to="/logout">Logout</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
#logo {
  width: 150px;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background-color: #ffdead;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.app-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
  color: black;
}

.nav-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0;
  padding: 0;
  width: 100%;
}

.nav-links li a {
  text-decoration: none;
  color: black;
  font-size: 1rem;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
  display: block;
  text-align: center;
}

.nav-links li a:hover {
  background-color: #ffe4c4;
  color: #ff8c69;
}

@media (max-width: 768px) {
  .navbar {
    width: 200px;
    padding: 15px 10px;
  }

  .app-title {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .nav-links li a {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .navbar {
    width: 100%;
    height: 30vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .nav-links {
    flex-direction: row;
    gap: 10px;
  }

  .nav-links li a {
    font-size: 0.8rem;
    padding: 5px 10px;
  }
}
</style>
