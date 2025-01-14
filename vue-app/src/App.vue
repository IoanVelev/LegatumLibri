<script>
import AboutPage from './components/AboutPage.vue';
import Home from './components/Home.vue';
import NavBar from './components/NavBar.vue';

export default {
  components: {
    NavBar,
    Home,
    AboutPage,
  }
}
</script>

<template>
  <header>
    <NavBar></NavBar>
  </header>
  <main>
    <div class="wrapper">
      <Home></Home>
    </div>
  </main>
</template>

<style scoped>
header {
  padding-top: 60px; /* Adjust for navbar height */
}

.wrapper {
  width: 1000px;
  display: grid;
  gap: 2rem;
}
</style>