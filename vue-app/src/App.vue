<script>
import NavBar from './components/NavBar.vue';

export default {
  components: {
    NavBar,
  }
}
</script>

<template>
    <NavBar></NavBar>
  
  <main>
    <router-view/>
  </main>
</template>

<style scoped>
header {
  padding-top: 60px; /* Adjust for navbar height */
}

main {
  width: 1500px;
}
</style>