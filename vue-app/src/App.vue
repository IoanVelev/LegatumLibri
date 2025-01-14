<script>
import NavBar from './components/NavBar.vue';

export default {
  components: {
    NavBar,
  }
}
</script>

<template>
  <header>
    <NavBar></NavBar>
  </header>
  <main>
    <router-view/>
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