<script>
import { useWishlistStore } from '@/stores/bookStore';
import { getAuth } from 'firebase/auth';

export default {
  data() {
    return {
      userId: null,
    };
  },
  computed: {
    wishlistBooks() {
      const store = useWishlistStore();
      return store.wishlistBooks;
    },
  },
  async created() {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      this.userId = user.uid;
      const store = useWishlistStore();
      await store.fetchWishlistBooks(this.userId); // Fetch user's wishlist
    } else {
      console.log('No user logged in.');
    }
  },
};
</script>

<template>
  <div class="wishlist-container">
    <h1 class="wishlist-header">Your Wishlist</h1>
    <div v-if="wishlistBooks.length > 0" class="wishlist-grid">
      <div v-for="book in wishlistBooks" :key="book.id" class="wishlist-card">
        <img :src="book.imageUrl" :alt="book.title" class="wishlist-card-image" />
        <div class="wishlist-card-content">
          <h2 class="wishlist-card-title">{{ book.title }}</h2>
          <p class="wishlist-card-genre"><strong>Genre:</strong> {{ book.genre }}</p>
          <button @click="navigateToBook(book.id)" class="wishlist-card-button">View Details</button>
        </div>
      </div>
    </div>
    <p v-else class="no-books-message">Your wishlist is empty. Start adding books!</p>
  </div>
</template>

<style scoped>
/* Container */
.wishlist-container {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Header */
.wishlist-header {
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

/* Grid Layout */
.wishlist-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 10px;
}

/* Card Styles */
.wishlist-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.wishlist-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

/* Card Image */
.wishlist-card-image {
  width: 100%;
  height: 200px;
  object-fit:contain
}

/* Card Content */
.wishlist-card-content {
  padding: 15px;
  text-align: center;
}

.wishlist-card-title {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
  font-weight: bold;
}

.wishlist-card-genre {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 15px;
}

/* Button Styles */
.wishlist-card-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.wishlist-card-button:hover {
  background-color: #0056b3;
}

/* No Books Message */
.no-books-message {
  text-align: center;
  font-size: 1.2rem;
  color: #777;
  margin-top: 30px;
}
</style>
