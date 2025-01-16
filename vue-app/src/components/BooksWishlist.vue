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
      store.fetchWishlistBooks(this.userId);
    } else {
      console.log('No user logged in.');
    }
  },
  methods: {
    navigateToBook(bookId) {
      this.$router.push(`/book/${bookId}`)
    },
    async removeFromWishlist(bookId) {
      const store = useWishlistStore();
      await store.removeFromWishlist(this.userId, bookId);
    }
  }
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
          <div class="wishlist-card-buttons">
            <button @click="navigateToBook(book.id)" class="wishlist-card-button">View Details</button>
            <button @click="removeFromWishlist(book.id)" class="remove-button">Remove from Wishlist</button>
          </div>
          
        </div>
      </div>
    </div>
    <p v-else class="no-books-message">Your wishlist is empty. Start adding books!</p>
  </div>
</template>

<style scoped>
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


.wishlist-header {
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}


.wishlist-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 10px;
}


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

.wishlist-card-image {
  width: 100%;
  height: 200px;
  object-fit:contain
}

.wishlist-card-content {
  margin-top: auto;
  padding: 15px;
  text-align: center;
  height: 200px;
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

.wishlist-card-buttons {
  display: flex;
  justify-content: space-between;
  gap: 10px; 
  margin-top: auto;
}

.wishlist-card-button:hover {
  background-color: #0056b3;
}

.remove-button {
  background-color:red;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* No Books Message */
.no-books-message {
  text-align: center;
  font-size: 1.2rem;
  color: #777;
  margin-top: 30px;
}
</style>
