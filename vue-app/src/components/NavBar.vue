<script>
export default {
    
}
</script>

<template>
<nav class="navbar">
    <div class="nav-container">
      <!-- Title -->
      <h1 class="app-title">LegatumLibri</h1>

      <!-- Navigation Links -->
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </div>
  </nav>
</template>


<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%; 
  width: 250px; 
  background-color: #FFDEAD; 
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
    height: auto; 
    flex-direction: row; 
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