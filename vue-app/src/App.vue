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


</style>